"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextView = exports.RelativeView = exports.FrontCard = exports.CircleBlur = exports.CenterView = exports.CardRelativeView = exports.BlurView = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var RelativeView = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    width: 100%;\n    position: relative;\n"])));

exports.RelativeView = RelativeView;

var CenterView = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    width: 100%;\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"])));

exports.CenterView = CenterView;

var TextView = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    width: 400px;\n    height: 300px;\n    position: relative;\n"])));

exports.TextView = TextView;

var CardRelativeView = _styledComponents["default"].div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    width: 100%;\n    height:  100%;\n    position: relative;\n    max-width: 350px;\n    max-height: 220px;\n    overflow: hidden;\n    border-radius: 20px;\n"])));

exports.CardRelativeView = CardRelativeView;

var FrontCard = _styledComponents["default"].div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    width: 100%;\n    height: 100%;\n    position: relative;\n    overflow: hidden;\n"])));

exports.FrontCard = FrontCard;

var BlurView = _styledComponents["default"].div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    z-index: 5;\n\n"])));

exports.BlurView = BlurView;

var CircleBlur = _styledComponents["default"].div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    width: 100px;\n"])));
/* width: ${({width}:{width: string}) => width};
height: ${({height}:{height: string}) => height};
border-radius: ${({borderRadius}:{borderRadius: string}) => borderRadius};
background: ${({background}:{background: string}) => background};
position: absolute;
top:${({top}:{top: string}) => top};
left:${({left}:{left: string}) => left};
trasnform: ${({top, left}:{top: string, left:string}) => `translate(${props.left}, ${props.top})`}; */


exports.CircleBlur = CircleBlur;