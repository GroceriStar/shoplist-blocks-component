"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _antd = require("antd");

var RadioButton = _antd.Radio.Button;
var RadioGroup = _antd.Radio.Group;

function onChange(e) {
  console.log("radio checked:".concat(e.target.value));
}

var RadioPanelWrapper = function RadioPanelWrapper() {
  return React.createElement("div", null, React.createElement("div", null, React.createElement(RadioGroup, {
    onChange: onChange,
    defaultValue: "a"
  }, React.createElement(RadioButton, {
    value: "a"
  }, "Hangzhou"), React.createElement(RadioButton, {
    value: "b"
  }, "Shanghai"), React.createElement(RadioButton, {
    value: "c"
  }, "Beijing"), React.createElement(RadioButton, {
    value: "d"
  }, "Chengdu"))), React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, React.createElement(RadioGroup, {
    onChange: onChange,
    defaultValue: "a"
  }, React.createElement(RadioButton, {
    value: "a"
  }, "Hangzhou"), React.createElement(RadioButton, {
    value: "b",
    disabled: true
  }, "Shanghai"), React.createElement(RadioButton, {
    value: "c"
  }, "Beijing"), React.createElement(RadioButton, {
    value: "d"
  }, "Chengdu"))), React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, React.createElement(RadioGroup, {
    disabled: true,
    onChange: onChange,
    defaultValue: "a"
  }, React.createElement(RadioButton, {
    value: "a"
  }, "Hangzhou"), React.createElement(RadioButton, {
    value: "b"
  }, "Shanghai"), React.createElement(RadioButton, {
    value: "c"
  }, "Beijing"), React.createElement(RadioButton, {
    value: "d"
  }, "Chengdu"))));
};

var _default = RadioPanelWrapper;
exports.default = _default;