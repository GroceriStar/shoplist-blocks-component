"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _lodash = _interopRequireDefault(require("lodash"));

var _Checkbox = _interopRequireDefault(require("../../components/Ingredient/Checkbox"));

var _shortid = _interopRequireDefault(require("shortid"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var List3Links =
/*#__PURE__*/
function (_Component) {
  _inherits(List3Links, _Component);

  function List3Links(props) {
    var _this;

    _classCallCheck(this, List3Links);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(List3Links).call(this, props));
    _this.state = {
      status: 'all',
      data: _this.props.data,
      list: _this.props.data
    };
    _this.onAddItem = _this.onAddItem.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onDeleteItem = _this.onDeleteItem.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(List3Links, [{
    key: "handleClick",
    value: function handleClick(e) {
      var result;

      switch (e.target.name) {
        case 'all':
          this.setState({
            status: "all",
            list: this.state.data
          });
          break;

        case "active":
          result = _lodash.default.filter(this.state.data, function (item) {
            return !item.isChecked;
          });
          this.setState({
            status: "active",
            list: result
          });
          break;

        case "purchased":
          result = _lodash.default.filter(this.state.data, function (item) {
            return item.isChecked;
          });
          this.setState({
            status: "purchased",
            list: result
          });
          break;
      }
    }
  }, {
    key: "onAddItem",
    value: function onAddItem(item) {
      var result = _lodash.default.map(this.state.data, function (obj) {
        if (obj.name === item) {
          return _objectSpread({}, obj, {
            isChecked: true
          });
        }

        return obj;
      });

      this.setState({
        data: result,
        list: result
      });
    }
  }, {
    key: "onDeleteItem",
    value: function onDeleteItem(item) {
      var result = _lodash.default.map(this.state.data, function (obj) {
        if (obj.name === item) {
          return _objectSpread({}, obj, {
            isChecked: false
          });
        }

        return obj;
      });

      this.setState({
        data: result,
        list: result
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react.default.createElement("div", null, _react.default.createElement("ul", {
        style: {
          "list-style-type": "none"
        }
      }, this.state.list.map(function (item, index) {
        return _react.default.createElement("li", {
          id: _shortid.default.generate()
        }, _react.default.createElement(_Checkbox.default, {
          name: item.name,
          isChecked: item.isChecked,
          onAddItem: _this2.onAddItem,
          onDeleteItem: _this2.onDeleteItem
        }, item.name));
      })), _react.default.createElement(_reactRouterDom.Link, {
        to: "/examples",
        onClick: this.handleClick,
        name: "all"
      }, "All"), _react.default.createElement(_reactRouterDom.Link, {
        to: "/examples",
        onClick: this.handleClick,
        name: "active"
      }, "Active"), _react.default.createElement(_reactRouterDom.Link, {
        to: "/examples",
        onClick: this.handleClick,
        name: "purchased"
      }, "Purchased"));
    }
  }]);

  return List3Links;
}(_react.Component);

var _default = List3Links;
exports.default = _default;