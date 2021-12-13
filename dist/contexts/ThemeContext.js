"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThemeContext = void 0;

var _react = require("react");

var _InitialThemeValue = require("../data/InitialThemeValue");

var ThemeContext = /*#__PURE__*/(0, _react.createContext)(_InitialThemeValue.InitialThemeValue);
exports.ThemeContext = ThemeContext;