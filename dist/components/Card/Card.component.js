"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Card = void 0;

var _react = _interopRequireDefault(require("react"));

require("bootstrap/dist/css/bootstrap.min.css");

var _Styles = require("./Styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Card = function Card(_ref) {
  var _ref$typeCard = _ref.typeCard,
      typeCard = _ref$typeCard === void 0 ? "default" : _ref$typeCard,
      cardViewCSS = _ref.cardViewCSS;
  return /*#__PURE__*/_react["default"].createElement(_Styles.RelativeView, null, /*#__PURE__*/_react["default"].createElement(_Styles.CenterView, null, /*#__PURE__*/_react["default"].createElement(_Styles.TextView, null, /*#__PURE__*/_react["default"].createElement(_Styles.CardRelativeView, {
    style: _objectSpread({}, cardViewCSS)
  }, /*#__PURE__*/_react["default"].createElement(_Styles.FrontCard, null, /*#__PURE__*/_react["default"].createElement(_Styles.BlurView, null))))));
};

exports.Card = Card;