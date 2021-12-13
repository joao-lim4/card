"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GlobalStyles = void 0;

var _styledComponents = require("styled-components");

var _RobotoRegular = _interopRequireDefault(require("./Roboto-Regular.ttf"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var GlobalStyles = (0, _styledComponents.createGlobalStyle)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\n    @font-face {\n        font-family: 'Roboto';\n        src: local('Roboto-Regular'), url(", ") format('truetype');\n        font-weight: normal\n        font-style: normal;\n    }\n\n    *{\n        margin: 0;\n        padding: 0;\n    }\n"])), _RobotoRegular["default"]);
exports.GlobalStyles = GlobalStyles;