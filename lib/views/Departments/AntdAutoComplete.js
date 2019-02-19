"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

require("antd/dist/antd.css");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var AntdAutoComplete =
/*#__PURE__*/
function (_Component) {
  _inherits(AntdAutoComplete, _Component);

  function AntdAutoComplete(props) {
    var _this;

    _classCallCheck(this, AntdAutoComplete);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AntdAutoComplete).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChange", function (value) {
      var suggestions = [];

      if (value.length > 0) {
        var regex = new RegExp("^".concat(value), 'i');
        suggestions = _this.data.sort().filter(function (i) {
          return regex.test(i);
        });
      }

      _this.setState({
        suggestions: suggestions,
        text: value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "selected", function (item) {
      if (_this.props.onSelect != undefined) {
        _this.props.onSelect(item);
      }

      var suggestions = [];

      if (item.length > 0) {
        var regex = new RegExp("^".concat(item), 'i');
        suggestions = _this.data.sort().filter(function (i) {
          return regex.test(i);
        });
      }

      _this.setState({
        text: item,
        suggestions: suggestions
      });
    });

    _this.data = _this.props.data || [];
    _this.state = {
      text: '',
      suggestions: []
    };
    _this.selected = _this.selected.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(AntdAutoComplete, [{
    key: "render",
    value: function render() {
      var dataSource = this.state.dataSource;
      return _react.default.createElement(_antd.AutoComplete, {
        dataSource: this.state.suggestions,
        style: {
          width: 200
        },
        onSelect: this.selected,
        onSearch: this.onChange,
        placeholder: "input here"
      });
    }
  }]);

  return AntdAutoComplete;
}(_react.Component);

var _default = AntdAutoComplete;
exports.default = _default;