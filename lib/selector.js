"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUltimateGrocery = getUltimateGrocery;
exports.getDepartments = exports.getAllIngredients = void 0;

var _groceristarFetch = require("@groceristar/groceristar-fetch");

var getAllIngredients = function getAllIngredients() {
  return _groceristarFetch.groceristar.getIngredients();
};

exports.getAllIngredients = getAllIngredients;

var getDepartments = function getDepartments() {
  var all = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  if (all) {
    return _groceristarFetch.groceristar.getAllDepartments();
  }

  return _groceristarFetch.groceristar.getDepartments();
}; // GS Loopback


exports.getDepartments = getDepartments;

function getUltimateGrocery() {
  return _groceristarFetch.gsLoopback.getUltimateGrocery();
}

;