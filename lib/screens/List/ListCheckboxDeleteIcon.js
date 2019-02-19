"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _Checkbox = _interopRequireDefault(require("../../components/Ingredient/Checkbox"));

var _DeleteLink = _interopRequireDefault(require("../../components/Ingredient/DeleteLink"));

var _shortid = _interopRequireDefault(require("shortid"));

var _wasteBin = _interopRequireDefault(require("./waste-bin.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var ListCheckboxDeleteIcon =
/*#__PURE__*/
function (_Component) {
  _inherits(ListCheckboxDeleteIcon, _Component);

  function ListCheckboxDeleteIcon() {
    _classCallCheck(this, ListCheckboxDeleteIcon);

    return _possibleConstructorReturn(this, _getPrototypeOf(ListCheckboxDeleteIcon).apply(this, arguments));
  }

  _createClass(ListCheckboxDeleteIcon, [{
    key: "render",
    value: function render() {
      var Style = {
        "backgroundImage": 'url(' + _wasteBin.default + ')',
        float: 'left',
        width: '24px',
        height: '24px' // backgroundImage: 'url(' + imgUrl + ')',

      };
      return _react.default.createElement("ul", {
        style: {
          "list-style-type": "none"
        }
      }, this.props.data.map(function (item, index) {
        return _react.default.createElement("li", {
          key: _shortid.default.generate(),
          id: _shortid.default.generate()
        }, _react.default.createElement(_Checkbox.default, {
          name: item
        }, item, _react.default.createElement(_DeleteLink.default, {
          id: index,
          url: "/examples/delete/" + index
        }, _react.default.createElement("div", {
          class: "btn"
        }, _react.default.createElement("span", {
          class: "icon",
          style: Style
        })))));
      }));
    }
  }]);

  return ListCheckboxDeleteIcon;
}(_react.Component);

var _default = ListCheckboxDeleteIcon;
exports.default = _default;