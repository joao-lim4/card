"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormContext = void 0;

var _react = require("react");

var _InitialFormValue = require("../data/InitialFormValue");

var FormContext = /*#__PURE__*/(0, _react.createContext)({
  formState: _InitialFormValue.InitialFormValue,
  formDispatch: function formDispatch() {}
});
exports.FormContext = FormContext;