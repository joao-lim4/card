"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextView = exports.SmallMessage = exports.RelativeView = exports.RelativeInput = exports.Label = exports.ImagePosition = exports.FormGroup = exports.DefaultInput = exports.CenterView = exports.ButtonDefault = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var RelativeView = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    width: 100%;\n    position: relative;\n"])));

exports.RelativeView = RelativeView;

var CenterView = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    width: 100%;\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"])));

exports.CenterView = CenterView;

var TextView = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    width: 400px;\n    height: 300px;\n    position: relative;\n"])));

exports.TextView = TextView;

var RelativeInput = _styledComponents["default"].div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    width: 100%;\n    height: 45px;\n    position: relative;\n"])));

exports.RelativeInput = RelativeInput;

var ImagePosition = _styledComponents["default"].img(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    height: 60%;\n    object-fit: contain;\n    position: absolute;\n    top: 50%;\n    right: 2%;\n    transform: translate(-2%, -50%);\n"])));

exports.ImagePosition = ImagePosition;

var DefaultInput = _styledComponents["default"].input(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    width: 100%;\n    height: 45px;\n    border-radius: ", ";\n    border: ", ";\n    box-shadow: ", ";\n    padding: 0px 10px;\n    transition: ", ";\n    font-family: ", ";\n    color: ", ";\n    background: transparent;\n\n    &:focus {\n        border: ", ";\n        outline: 0;\n        box-shadow: ", ";\n    }\n"])), function (_ref) {
  var theme = _ref.theme,
      themeType = _ref.themeType;
  return theme[themeType].input["default"].border.radius;
}, function (_ref2) {
  var theme = _ref2.theme,
      error = _ref2.error,
      themeType = _ref2.themeType;
  return !error ? theme[themeType].input["default"].border["default"] : theme[themeType].input.error.border["default"];
}, function (_ref3) {
  var theme = _ref3.theme,
      error = _ref3.error,
      themeType = _ref3.themeType;
  return !error ? theme[themeType].shadows["default"] : theme[themeType].input.error.shadow;
}, function (_ref4) {
  var theme = _ref4.theme,
      themeType = _ref4.themeType;
  return theme[themeType].transitions.fast;
}, function (_ref5) {
  var theme = _ref5.theme,
      themeType = _ref5.themeType;
  return theme[themeType].font["default"];
}, function (_ref6) {
  var theme = _ref6.theme,
      themeType = _ref6.themeType;
  return theme[themeType].colors.secondary;
}, function (_ref7) {
  var theme = _ref7.theme,
      themeType = _ref7.themeType;
  return theme[themeType].efects.input.focus.border;
}, function (_ref8) {
  var theme = _ref8.theme,
      themeType = _ref8.themeType;
  return theme[themeType].efects.input.focus.shadow;
});

exports.DefaultInput = DefaultInput;

var FormGroup = _styledComponents["default"].div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    width: 100%;\n    /* margin-bottom: 20px; */\n    position:relative;\n"])));

exports.FormGroup = FormGroup;

var SmallMessage = _styledComponents["default"].small(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    font-family: ", ";\n    display: inline-block;\n    color: #f70000;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    font-size: 1rem;\n"])), function (_ref9) {
  var theme = _ref9.theme,
      themeType = _ref9.themeType;
  return theme[themeType].font["default"];
});

exports.SmallMessage = SmallMessage;

var ButtonDefault = _styledComponents["default"].button(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    height: 45px;\n    width: calc(50% - 10px);\n    justify-content: center;\n    align-items: center;\n    display: flex;\n    background: ", ";\n    border: ", ";\n    border-radius: ", ";\n    color: ", ";\n    font-family: ", ";\n    box-shadow: ", ";\n"])), function (_ref10) {
  var theme = _ref10.theme,
      themeType = _ref10.themeType;
  return theme[themeType].button.bgColor.primary;
}, function (_ref11) {
  var theme = _ref11.theme,
      themeType = _ref11.themeType;
  return theme[themeType].button.border["default"];
}, function (_ref12) {
  var theme = _ref12.theme,
      themeType = _ref12.themeType;
  return theme[themeType].button.border.radius;
}, function (_ref13) {
  var theme = _ref13.theme,
      themeType = _ref13.themeType;
  return theme[themeType].colors.primary;
}, function (_ref14) {
  var theme = _ref14.theme,
      themeType = _ref14.themeType;
  return theme[themeType].font["default"];
}, function (_ref15) {
  var theme = _ref15.theme,
      themeType = _ref15.themeType;
  return theme[themeType].shadows["default"];
});

exports.ButtonDefault = ButtonDefault;

var Label = _styledComponents["default"].label(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    position: absolute;\n    transition: ", ";\n    font-size: 1rem;\n    font-family: ", ";\n    left: 3%;\n    color: ", ";\n    z-index: ", ";\n    top: ", ";\n    padding: 0px 5px 0px 5px;\n    transform: ", ";\n    background:  ", ";\n"])), function (_ref16) {
  var theme = _ref16.theme,
      themeType = _ref16.themeType;
  return theme[themeType].transitions.fast;
}, function (_ref17) {
  var theme = _ref17.theme,
      themeType = _ref17.themeType;
  return theme[themeType].font["default"];
}, function (_ref18) {
  var activeAnimation = _ref18.activeAnimation,
      theme = _ref18.theme,
      themeType = _ref18.themeType;
  return !activeAnimation ? theme[themeType].colors.grey : theme[themeType].colors.secondary;
}, function (_ref19) {
  var activeAnimation = _ref19.activeAnimation,
      theme = _ref19.theme;
  return !activeAnimation ? -1 : 1;
}, function (_ref20) {
  var activeAnimation = _ref20.activeAnimation,
      theme = _ref20.theme;
  return !activeAnimation ? '50%' : '-60%';
}, function (_ref21) {
  var activeAnimation = _ref21.activeAnimation;
  return !activeAnimation ? 'translate(-3%, -50%)' : 'translate(-3%, 60%)';
}, function (_ref22) {
  var theme = _ref22.theme,
      themeType = _ref22.themeType;
  return theme[themeType].colors.primary;
});

exports.Label = Label;