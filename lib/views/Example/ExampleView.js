"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDnd = require("react-dnd");

var _reactDndHtml5Backend = _interopRequireDefault(require("react-dnd-html5-backend"));

var _SimpleText = _interopRequireDefault(require("../../components/Ingredient/SimpleText"));

var _Checkbox = _interopRequireDefault(require("../../components/Ingredient/Checkbox"));

var _DeleteLink = _interopRequireDefault(require("../../components/Ingredient/DeleteLink"));

var _EditableLabel = _interopRequireDefault(require("../../components/Ingredient/EditableLabel"));

var _EditLink = _interopRequireDefault(require("../../components/Ingredient/EditLink"));

var _Id = _interopRequireDefault(require("../../components/Ingredient/Id"));

var _Label = _interopRequireDefault(require("../../components/Ingredient/Label"));

var _ListItem = _interopRequireDefault(require("../../components/Ingredient/ListItem"));

var _Order = _interopRequireDefault(require("../../components/Ingredient/Order"));

var _Selectbox = _interopRequireDefault(require("../../components/Ingredient/Selectbox"));

var _Status = _interopRequireDefault(require("../../components/Ingredient/Status"));

var _TextId = _interopRequireDefault(require("../../components/Ingredient/TextId"));

var _Form = _interopRequireDefault(require("../../components/Ingredient/Form/Form1"));

var _Form2 = _interopRequireDefault(require("../../components/Ingredient/Form/Form2"));

var _Form3 = _interopRequireDefault(require("../../components/Ingredient/Form/Form3"));

var _SortableList = _interopRequireDefault(require("../../components/SortableList/SortableList"));

var _Title = _interopRequireDefault(require("../Departments/Title"));

var _AutoComplete = _interopRequireDefault(require("../Departments/AutoComplete"));

var _AntdAutoComplete = _interopRequireDefault(require("../Departments/AntdAutoComplete"));

var _ListItemLink = _interopRequireDefault(require("../Departments/ListItemLink"));

var _ListItemEdit = _interopRequireDefault(require("../Departments/ListItemEdit"));

var _ListItemDelete = _interopRequireDefault(require("../Departments/ListItemDelete"));

var _IngredientsList = _interopRequireDefault(require("../List/IngredientsList"));

var _ListCheckbox = _interopRequireDefault(require("../List/ListCheckbox"));

var _ListCheckboxDeleteLink = _interopRequireDefault(require("../List/ListCheckboxDeleteLink"));

var _ListCheckboxDeleteIcon = _interopRequireDefault(require("../List/ListCheckboxDeleteIcon"));

var _ListCheckboxStatus = _interopRequireDefault(require("../List/ListCheckboxStatus"));

var _List3Links = _interopRequireDefault(require("../List/List3Links"));

var _ListLayouts = _interopRequireDefault(require("../List/ListLayouts"));

var _selector = require("../../selector");

var _groceryComponent = require("@groceristar/grocery-component");

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

var Examples =
/*#__PURE__*/
function (_Component) {
  _inherits(Examples, _Component);

  function Examples() {
    _classCallCheck(this, Examples);

    return _possibleConstructorReturn(this, _getPrototypeOf(Examples).apply(this, arguments));
  }

  _createClass(Examples, [{
    key: "render",
    value: function render() {
      var id = 12345;
      var id1 = 1234;
      var items = ["apple", "milk"];
      var text1 = 'Car';
      var ingredientsList = [{
        key: '20c38e50-1ffb-11e9-ad6b-31f0d6717595',
        name: 'Asparagus',
        isChecked: false,
        departmentID: '20c38e51-1ffb-11e9-ad6b-31f0d6717595',
        order: 0
      }, {
        key: '20c38e52-1ffb-11e9-ad6b-31f0d6717595',
        name: 'Broccoli',
        isChecked: true,
        departmentID: '20c38e53-1ffb-11e9-ad6b-31f0d6717595',
        order: 0
      }, {
        key: '20c38e54-1ffb-11e9-ad6b-31f0d6717595',
        name: 'Carrots',
        isChecked: false,
        departmentID: '20c38e55-1ffb-11e9-ad6b-31f0d6717595',
        order: 0
      }, {
        key: '20c38e56-1ffb-11e9-ad6b-31f0d6717595',
        name: 'Cauliflower',
        isChecked: false,
        departmentID: '20c38e57-1ffb-11e9-ad6b-31f0d6717595',
        order: 0
      }];
      return _react.default.createElement("div", null, _react.default.createElement("br", null), _react.default.createElement("br", null), _react.default.createElement("h3", null, "SimpleText"), _react.default.createElement(_SimpleText.default, null, "This is SimpleText"), _react.default.createElement("hr", null), _react.default.createElement("h3", null, "Checkbox"), _react.default.createElement(_Checkbox.default, {
        name: "Check"
      }, "Check"), _react.default.createElement("hr", null), _react.default.createElement("h3", null, "DeleteLink"), _react.default.createElement(_DeleteLink.default, {
        id: id,
        url: "/examples/delete/" + id
      }, "Link"), _react.default.createElement("hr", null), _react.default.createElement("h3", null, "EditableLabel"), _react.default.createElement(_EditableLabel.default, {
        id: "ok"
      }, "This is label"), _react.default.createElement("hr", null), _react.default.createElement("h3", null, "EditLink"), _react.default.createElement(_EditLink.default, {
        id: id1,
        url: "/examples/edit/" + id1
      }, "Link"), _react.default.createElement("hr", null), _react.default.createElement("h3", null, "Id"), _react.default.createElement(_Id.default, null), _react.default.createElement("hr", null), _react.default.createElement("h3", null, "Label"), _react.default.createElement(_Label.default, null, "This is label"), _react.default.createElement("hr", null), _react.default.createElement("h3", null, "ListItem"), _react.default.createElement(_ListItem.default, {
        data: ["First", "Second", "Thirld"]
      }), _react.default.createElement("hr", null), _react.default.createElement("h3", null, "Order"), _react.default.createElement(_Order.default, {
        data: ["Fish", "Milk", "Apple"]
      }), _react.default.createElement("hr", null), _react.default.createElement("h3", null, "Selectbox"), _react.default.createElement(_Selectbox.default, {
        data: ["Apple", "Rastberry", "12"]
      }), _react.default.createElement("hr", null), _react.default.createElement("h3", null, "Status"), _react.default.createElement(_Status.default, null), _react.default.createElement("hr", null), _react.default.createElement("h3", null, "TextId"), _react.default.createElement(_TextId.default, {
        id: "233"
      }, "This is text with id"), _react.default.createElement("hr", null), _react.default.createElement("h3", null, "Forms"), _react.default.createElement("h3", null, "Form1"), _react.default.createElement(_Form.default, null), _react.default.createElement("hr", null), _react.default.createElement("h3", null, "Form2"), _react.default.createElement(_Form2.default, null), _react.default.createElement("hr", null), _react.default.createElement("h3", null, "Form3"), _react.default.createElement(_Form3.default, null), _react.default.createElement("hr", null), _react.default.createElement("hr", null), _react.default.createElement("br", null), _react.default.createElement("h3", null, "Lists"), _react.default.createElement("h3", null, "ListLayouts"), _react.default.createElement(_ListLayouts.default, {
        data: ["One", "Two", "Three", "Apple"],
        layout: "ListItemEdit"
      }), _react.default.createElement("h3", null, "List3Links"), _react.default.createElement(_List3Links.default, {
        data: ingredientsList
      }), _react.default.createElement("h3", null, "IngredientsList"), _react.default.createElement(_IngredientsList.default, {
        ingredients: (0, _selector.getAllIngredients)().slice(0, 15)
      }), _react.default.createElement("h3", null, "ListCheckbox"), _react.default.createElement(_ListCheckbox.default, {
        data: ["One", "Two", "Three", "Apple"]
      }), _react.default.createElement("h3", null, "ListCheckboxDeleteLink"), _react.default.createElement(_ListCheckboxDeleteLink.default, {
        data: ["One", "Two", "Three", "Apple"]
      }), _react.default.createElement("h3", null, "ListCheckboxDeleteIcon"), _react.default.createElement(_ListCheckboxDeleteIcon.default, {
        data: ["One", "Two", "Three", "Apple"]
      }), _react.default.createElement("h3", null, "ListCheckboxStatus"), _react.default.createElement(_ListCheckboxStatus.default, {
        data: ["One", "Two", "Three", "Apple"]
      }), _react.default.createElement("h3", null, "DefaultList"), _react.default.createElement(_groceryComponent.DefaultList, {
        items: ["One", "Two", "Three", "Apple"]
      }), _react.default.createElement("hr", null), _react.default.createElement("br", null), _react.default.createElement("br", null), _react.default.createElement(_Title.default, {
        id: "123"
      }, "Title with id"), _react.default.createElement(_Title.default, null, "AutoComplete"), _react.default.createElement(_AutoComplete.default, {
        data: ["a", "aa", "aaa", "b", "bb", "c", "cc"]
      }), _react.default.createElement("hr", null), _react.default.createElement(_AntdAutoComplete.default, {
        data: ["a", "aa", "aaa", "b", "bb", "c", "cc"]
      }), _react.default.createElement("hr", null), _react.default.createElement("br", null), _react.default.createElement(_Title.default, null, "List Item with link"), _react.default.createElement(_ListItemLink.default, {
        list: [{
          name: "One",
          subList: ["One.One", "One.Two"]
        }, {
          name: "Two",
          subList: ["Two.One", "Two.Two"]
        }, {
          name: "Three",
          subList: ["Three.One", "Three.Two"]
        }]
      }), _react.default.createElement("hr", null), _react.default.createElement(_Title.default, null, "List Item Edit"), _react.default.createElement(_ListItemEdit.default, {
        list: ["one", "two", "three"]
      }), _react.default.createElement("hr", null), _react.default.createElement(_Title.default, null, "List Item Delete"), _react.default.createElement(_ListItemDelete.default, {
        list: ["one", "two", "three"]
      }), _react.default.createElement("hr", null));
    }
  }]);

  return Examples;
}(_react.Component);

var _default = Examples;
exports.default = _default;