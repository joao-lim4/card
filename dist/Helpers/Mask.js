"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ValidateMask = exports.CardMask = void 0;

var CardMask = function CardMask(number) {
  return number.replace(/\D/g, "").replace(/^(\d{4})(\d)/g, "$1 $2").replace(/^(\d{4})\s(\d{4})(\d)/g, "$1 $2 $3").replace(/^(\d{4})\s(\d{4})\s(\d{4})(\d)/g, "$1 $2 $3 $4");
};

exports.CardMask = CardMask;

var ValidateMask = function ValidateMask(number) {
  return number.replace(/\D/g, "").replace(/^(\d{2})(\d)/g, "$1/$2");
};

exports.ValidateMask = ValidateMask;