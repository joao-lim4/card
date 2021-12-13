"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormCard = void 0;

var _react = _interopRequireDefault(require("react"));

var _GlobalReset = require("./styles/GlobalReset");

var _FormProvider = require("./Providers/FormProvider");

var _Form = require("./components/Form/Form.component");

var _ThemeProvider = require("./Providers/ThemeProvider");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// ReactDOM.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>,
//   document.getElementById('root')
// );
// import { Card } from "./components/Card/Card.component";
var FormCard = function FormCard(_ref) {
  var onSubmitForm = _ref.onSubmitForm,
      ButtonSubmit = _ref.ButtonSubmit,
      initialData = _ref.initialData,
      inputCSS = _ref.inputCSS,
      inputClass = _ref.inputClass,
      labelAnimate = _ref.labelAnimate,
      themeType = _ref.themeType;
  return /*#__PURE__*/_react["default"].createElement(_ThemeProvider.ThemeProvider, null, /*#__PURE__*/_react["default"].createElement(_FormProvider.FormProvider, null, /*#__PURE__*/_react["default"].createElement(_GlobalReset.GlobalStyles, null), /*#__PURE__*/_react["default"].createElement(_Form.Form, {
    onSubmitForm: onSubmitForm,
    labelAnimate: labelAnimate,
    initialData: initialData,
    ButtonSubmit: ButtonSubmit,
    inputCSS: inputCSS,
    themeType: themeType,
    inputClass: inputClass
  })));
};

exports.FormCard = FormCard;