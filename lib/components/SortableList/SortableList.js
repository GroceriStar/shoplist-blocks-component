"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Card = _interopRequireDefault(require("./Card"));

var _reactDnd = require("react-dnd");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var typeCard = Symbol.for('@@Type::Card');
var specTarget = {
  drop: function drop(props) {
    return {
      id: props.id,
      index: props.index
    };
  }
};
var specSource = {
  beginDrag: function beginDrag(props) {
    return {
      id: props.id
    };
  },
  endDrag: function endDrag(props, monitor) {
    if (!monitor.didDrop()) {
      return;
    }

    var source = monitor.getItem();
    var target = monitor.getDropResult();

    if (source.id === target.id) {
      return;
    }

    props.moveCard(source.id, target.index);
  }
};

var collectTarget = function collectTarget(connect) {
  return {
    connectDropTarget: connect.dropTarget()
  };
};

var collectSource = function collectSource(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
};

var CardWithDnD = (0, _reactDnd.DropTarget)(typeCard, specTarget, collectTarget)((0, _reactDnd.DragSource)(typeCard, specSource, collectSource)(_Card.default));

var SortableList =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SortableList, _React$Component);

  function SortableList(props) {
    var _this;

    _classCallCheck(this, SortableList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SortableList).call(this, props));
    _this.moveCard = _this.moveCard.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.state = {
      cards: [{
        id: '--0',
        title: '#1 Test',
        color: "success"
      }, {
        id: '--1',
        title: '#2 Text',
        color: "primary"
      }, {
        id: '--2',
        title: '#3 Task',
        color: "warning"
      }, {
        id: '--3',
        title: '#4 Some text',
        color: "info"
      }, {
        id: '--4',
        title: '#5 New row',
        color: "danger"
      }, {
        id: '--5',
        title: '#6 Next item',
        color: "dark"
      }]
    };
    return _this;
  }

  _createClass(SortableList, [{
    key: "moveCard",
    value: function moveCard(id, index) {
      var cards = this.state.cards;
      var sourceCard = cards.find(function (card) {
        return card.id === id;
      });
      var sortCards = cards.filter(function (card) {
        return card.id !== id;
      });
      sortCards.splice(index, 0, sourceCard);
      this.setState({
        cards: sortCards
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var cards = this.props.children;
      return _react.default.createElement("div", {
        className: "offset-2 col-8"
      }, cards.map(function (card, i) {
        return _react.default.createElement(CardWithDnD, _extends({
          key: card.id,
          index: i,
          moveCard: _this2.moveCard
        }, card));
      }));
    }
  }]);

  return SortableList;
}(_react.default.Component);

var _default = SortableList;
exports.default = _default;