"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var AutoComplete =
/*#__PURE__*/
function (_Component) {
  _inherits(AutoComplete, _Component);

  function AutoComplete(props) {
    var _this;

    _classCallCheck(this, AutoComplete);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AutoComplete).call(this, props));
    _this.data = _this.props.data || [];
    _this.state = {
      text: '',
      suggestions: []
    };
    return _this;
  }

  _createClass(AutoComplete, [{
    key: "onChange",
    value: function onChange(e) {
      e.preventDefault();
      var value = e.target.value;
      var suggestions = [];

      if (value.length > 0) {
        var regex = new RegExp("^".concat(value), 'i');
        suggestions = this.data.sort().filter(function (i) {
          return regex.test(i);
        });
      }

      this.setState({
        suggestions: suggestions,
        text: value
      });
    }
  }, {
    key: "selected",
    value: function selected(item) {
      if (this.props.onSelect != undefined) {
        this.props.onSelect(item);
      }

      this.setState({
        text: item,
        suggestions: []
      });
    }
  }, {
    key: "showSuggestions",
    value: function showSuggestions() {
      var _this2 = this;

      var suggestions = this.state.suggestions;
      if (suggestions.length === 0) return null;

      var element = _react.default.createElement("ul", null, suggestions.map(function (item) {
        return _react.default.createElement("li", {
          style: {
            cursor: 'pointer'
          },
          onClick: function onClick() {
            return _this2.selected(item);
          }
        }, item);
      }));

      return element;
    }
  }, {
    key: "render",
    value: function render() {
      var text = this.state.text;
      return _react.default.createElement("div", {
        style: {
          height: '200px'
        }
      }, _react.default.createElement("input", {
        type: "text",
        onChange: this.onChange,
        value: text
      }), this.showSuggestions());
    }
  }]);

  return AutoComplete;
}(_react.Component);

var _default = AutoComplete;
exports.default = _default;