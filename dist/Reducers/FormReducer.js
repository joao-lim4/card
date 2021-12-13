"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormReducer = void 0;

var _validateFlag = _interopRequireDefault(require("validate-flag"));

var _InitialFormValue = require("../data/InitialFormValue");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var updateMaxLength = function updateMaxLength(state, fildName, payload) {
  var valueMaxLength = payload.length === state.length[fildName] ? true : state.maxLength[fildName];
  return _objectSpread(_objectSpread({}, state.maxLength), {}, _defineProperty({}, fildName, valueMaxLength));
};

var updateValidate = function updateValidate(state, fildName, payload) {
  var validateObjectData = _objectSpread({}, state.validate[fildName]);

  if (state.maxLength[fildName] && payload.length < state.length[fildName]) {
    validateObjectData.error = "O campo ".concat(validateObjectData.name, " \xE9 obrigat\xF3rio!");
    validateObjectData.active = true;
  } else {
    validateObjectData.error = "";
    validateObjectData.active = false;
  }

  ;
  return _objectSpread(_objectSpread({}, state.validate), {}, _defineProperty({}, fildName, validateObjectData));
};

var createInitFormValue = function createInitFormValue(payload) {
  return _objectSpread(_objectSpread({}, payload), {}, {
    numberCard: function () {
      if (payload.numberCard) {
        if (payload.numberCard.length >= 16) {
          return payload.numberCard.substring(0, 16);
        }

        return payload.numberCard;
      }

      return "";
    }()
  });
};

var createCardType = function createCardType(numberCard) {
  if (numberCard) {
    var _Validate$checkBandei = _validateFlag["default"].checkBandeiraToImage(numberCard),
        _Validate$checkBandei2 = _slicedToArray(_Validate$checkBandei, 1),
        validateCard = _Validate$checkBandei2[0];

    if (validateCard.hasOwnProperty("success")) {
      return {
        dataValue: validateCard.dataValue,
        encode: _objectSpread({}, validateCard.encode),
        mask: _objectSpread({}, validateCard.mask),
        typeOfbandeira: validateCard.typeOfbandeira
      };
    }
  }

  return _InitialFormValue.InitialFormValue.cardType;
};

var FormReducer = function FormReducer(state, action) {
  var fildName = action.fildName,
      payload = action.payload,
      type = action.type;

  switch (type) {
    case 'update-form':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          formValue: _objectSpread(_objectSpread({}, state.formValue), {}, _defineProperty({}, fildName, payload)),
          maxLength: updateMaxLength(state, fildName, payload),
          validate: updateValidate(state, fildName, payload)
        });
      }

    case 'update-validate':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          validate: _objectSpread(_objectSpread({}, state.validate), {}, _defineProperty({}, fildName, payload))
        });
      }

    case 'init-state':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          formValue: createInitFormValue(payload),
          cardType: createCardType(payload.numberCard)
        });
      }

    case "update-error":
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          validate: _objectSpread(_objectSpread({}, state.validate), {}, _defineProperty({}, fildName, _objectSpread({}, payload)))
        });
      }

    case "update-card-type":
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          cardType: _objectSpread({}, payload)
        });
      }

    case "reset-card-type":
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          cardType: _InitialFormValue.InitialFormValue.cardType
        });
      }

    case "update-label-active":
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          labelActive: _objectSpread(_objectSpread({}, state.labelActive), {}, _defineProperty({}, fildName, payload))
        });
      }

    default:
      return _objectSpread({}, state);
  }
};

exports.FormReducer = FormReducer;