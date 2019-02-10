"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ListItemEdit =
/*#__PURE__*/
function (_Component) {
  _inherits(ListItemEdit, _Component);

  function ListItemEdit() {
    var _this;

    _classCallCheck(this, ListItemEdit);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ListItemEdit).call(this));
    _this.state = {
      list: [],
      hidenFields: true,
      inputText: '',
      currentItem: ''
    };
    return _this;
  }

  _createClass(ListItemEdit, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        list: this.props.list
      });
    }
  }, {
    key: "onChange",
    value: function onChange(e) {
      e.preventDefault();
      var value = e.target.value;
      var _this$state = this.state,
          currentItem = _this$state.currentItem,
          list = _this$state.list;

      var newList = _toConsumableArray(list);

      var index = list.indexOf(currentItem);
      newList[index] = value;
      this.setState({
        inputText: value,
        list: newList,
        currentItem: value
      });
    }
  }, {
    key: "onclickItem",
    value: function onclickItem(item) {
      this.setState({
        hidenFields: false,
        inputText: item,
        currentItem: item
      });
    }
  }, {
    key: "onclickButton",
    value: function onclickButton(e) {
      e.preventDefault();
      this.setState({
        hidenFields: true,
        inputText: '',
        currentItem: ''
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state2 = this.state,
          list = _this$state2.list,
          hidenFields = _this$state2.hidenFields,
          inputText = _this$state2.inputText;
      return _react.default.createElement("div", null, _react.default.createElement("input", {
        type: "text",
        hidden: hidenFields,
        onChange: this.onChange,
        value: inputText
      }), _react.default.createElement("button", {
        onClick: this.onclickButton,
        hidden: hidenFields
      }, "Hide"), _react.default.createElement("ul", null, list.map(function (item) {
        return _react.default.createElement("li", {
          id: item,
          style: {
            cursor: 'pointer'
          },
          onClick: function onClick() {
            return _this2.onclickItem(item);
          }
        }, item);
      })));
    }
  }]);

  return ListItemEdit;
}(_react.Component);

var _default = ListItemEdit;
exports.default = _default;