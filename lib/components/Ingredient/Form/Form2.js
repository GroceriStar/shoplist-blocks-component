"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ListItem = _interopRequireDefault(require("../ListItem"));

var _Selectbox = _interopRequireDefault(require("../Selectbox"));

var _selector = require("../../../selector");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var Form2 =
/*#__PURE__*/
function (_Component) {
  _inherits(Form2, _Component);

  function Form2(props) {
    var _this;

    _classCallCheck(this, Form2);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Form2).call(this, props));
    _this.state = {
      ingredientsList: [],
      selectedIngredient: "Asparagus",
      selectedDepartment: "Fresh vegetables",
      groceryName: "Ultimate Grocery List"
    };
    _this.handleSelectedIngredient = _this.handleSelectedIngredient.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleSelectedDepartment = _this.handleSelectedDepartment.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Form2, [{
    key: "handleSelectedIngredient",
    value: function handleSelectedIngredient(ingredient) {
      this.setState({
        selectedIngredient: ingredient
      });
    }
  }, {
    key: "handleSelectedDepartment",
    value: function handleSelectedDepartment(department) {
      this.setState({
        selectedDepartment: department
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      this.state.ingredientsList.push(this.state.selectedIngredient);
      this.setState({
        ingredientsList: this.state.ingredientsList
      });
      e.preventDefault();
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", null, _react.default.createElement("form", {
        onSubmit: this.handleSubmit
      }, _react.default.createElement(_Selectbox.default, {
        selectedValue: this.state.selectedIngredient,
        onSelect: this.handleSelectedIngredient,
        data: (0, _selector.getIngredients)(this.state.selectedDepartment)
      }), _react.default.createElement(_Selectbox.default, {
        selectedValue: this.state.selectedDepartment,
        onSelect: this.handleSelectedDepartment,
        data: (0, _selector.getGroceryByName)(this.state.groceryName)[0].departments
      }), _react.default.createElement(_ListItem.default, {
        data: this.state.ingredientsList
      }), _react.default.createElement("input", {
        type: "Submit"
      })));
    }
  }]);

  return Form2;
}(_react.Component);

var _default = Form2;
exports.default = _default;