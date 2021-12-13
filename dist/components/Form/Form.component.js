"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Form = void 0;

var _react = _interopRequireWildcard(require("react"));

var _FormProvider = require("../../Providers/FormProvider");

require("bootstrap/dist/css/bootstrap.min.css");

var _Styles = require("./Styles");

var _ThemeProvider = require("../../Providers/ThemeProvider");

var _InitialFormValue = require("../../data/InitialFormValue");

var _Mask = require("../../Helpers/Mask");

var _validateFlag = _interopRequireDefault(require("validate-flag"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Form = function Form(_ref) {
  var initialData = _ref.initialData,
      onSubmitForm = _ref.onSubmitForm,
      ButtonSubmit = _ref.ButtonSubmit,
      inputClass = _ref.inputClass,
      inputCSS = _ref.inputCSS,
      _ref$labelAnimate = _ref.labelAnimate,
      labelAnimate = _ref$labelAnimate === void 0 ? false : _ref$labelAnimate,
      _ref$themeType = _ref.themeType,
      themeType = _ref$themeType === void 0 ? "light" : _ref$themeType;

  var _useFormContext = (0, _FormProvider.useFormContext)(),
      _useFormContext$formS = _useFormContext.formState,
      formValue = _useFormContext$formS.formValue,
      maxLength = _useFormContext$formS.maxLength,
      validate = _useFormContext$formS.validate,
      cardType = _useFormContext$formS.cardType,
      labelActive = _useFormContext$formS.labelActive,
      formDispatch = _useFormContext.formDispatch;

  var theme = (0, _ThemeProvider.useThemeContext)();
  var updateLabelActive = (0, _react.useCallback)(function (payload, fildName) {
    if (labelAnimate) {
      formDispatch({
        payload: payload,
        type: "update-label-active",
        fildName: fildName
      });
    }
  }, [formDispatch, labelAnimate]);
  var updateCardNumber = (0, _react.useCallback)(function (cardNumber) {
    var _Validate$checkBandei = _validateFlag["default"].checkBandeiraToImage(cardNumber),
        _Validate$checkBandei2 = _slicedToArray(_Validate$checkBandei, 1),
        validateCard = _Validate$checkBandei2[0];

    if (validateCard.hasOwnProperty("success")) {
      formDispatch({
        payload: {
          dataValue: validateCard.dataValue,
          encode: _objectSpread({}, validateCard.encode),
          mask: _objectSpread({}, validateCard.mask),
          typeOfbandeira: validateCard.typeOfbandeira
        },
        type: "update-card-type"
      });
    } else {
      if (cardNumber.length === 19) {
        formDispatch({
          type: "update-error",
          fildName: "numberCard",
          payload: {
            error: "O cartão informado é inválido!",
            active: true,
            name: "Número do cartão"
          }
        });
      }
    }

    if (cardNumber.length >= 1) {
      updateLabelActive(true, "numberCard");
    } else {
      updateLabelActive(false, "numberCard");
    }

    formDispatch({
      payload: (0, _Mask.CardMask)(cardNumber),
      type: "update-form",
      fildName: "numberCard"
    });
  }, [formDispatch, updateLabelActive]);
  var submitForm = (0, _react.useCallback)(function (event) {
    event.preventDefault();
    var errorCase = false;

    for (var key in formValue) {
      if (formValue[key] === "") {
        errorCase = true;
        formDispatch({
          type: "update-error",
          fildName: key,
          payload: {
            error: "O campo ".concat(_InitialFormValue.InitialFormValue.validate[key].name, " \xE9 obrigat\xF3rio!"),
            active: true,
            name: _InitialFormValue.InitialFormValue.validate[key].name
          }
        });
      }
    }

    if (errorCase) return;
    return onSubmitForm(_objectSpread(_objectSpread({}, formValue), cardType));
  }, [formDispatch, cardType, formValue, onSubmitForm]);
  var updateValueInput = (0, _react.useCallback)(function (value, fildName) {
    if (value.length >= 1) {
      updateLabelActive(true, fildName);
    } else {
      updateLabelActive(false, fildName);
    }

    formDispatch({
      payload: value,
      type: "update-form",
      fildName: fildName
    });
  }, [formDispatch, updateLabelActive]);
  (0, _react.useEffect)(function () {
    if (initialData) {
      formDispatch({
        type: "init-state",
        payload: _objectSpread({}, initialData)
      });
    }
  }, [initialData, formDispatch]);
  (0, _react.useEffect)(function () {}, [formValue, maxLength, cardType, validate, labelActive, themeType]);
  return /*#__PURE__*/_react["default"].createElement(_Styles.RelativeView, null, /*#__PURE__*/_react["default"].createElement(_Styles.CenterView, null, /*#__PURE__*/_react["default"].createElement(_Styles.TextView, null, /*#__PURE__*/_react["default"].createElement("form", {
    onSubmit: submitForm
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-100"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "d-flex w-100"
  }, /*#__PURE__*/_react["default"].createElement(_Styles.FormGroup, null, /*#__PURE__*/_react["default"].createElement(_Styles.RelativeInput, null, labelAnimate && /*#__PURE__*/_react["default"].createElement(_Styles.Label, {
    activeAnimation: labelActive.name,
    theme: theme,
    themeType: themeType
  }, "Nome no cart\xE3o"), /*#__PURE__*/_react["default"].createElement(_Styles.DefaultInput, {
    theme: theme,
    themeType: themeType,
    className: inputClass ? inputClass : "",
    error: maxLength.name ? validate.name.active ? true : false : false,
    type: "text",
    name: "nameCard",
    placeholder: labelAnimate ? "" : "Nome no cartão",
    style: inputCSS ? _objectSpread({}, inputCSS) : {},
    value: formValue.name || '',
    autoComplete: "off",
    onChange: function onChange(_ref2) {
      var value = _ref2.target.value;
      return updateValueInput(value, "name");
    },
    onFocus: function onFocus() {
      return updateLabelActive(true, "name");
    },
    onBlur: function onBlur(_ref3) {
      var value = _ref3.target.value;
      return updateLabelActive(value.length >= 1 ? true : false, "name");
    },
    required: true
  })), /*#__PURE__*/_react["default"].createElement(_Styles.SmallMessage, {
    theme: theme,
    themeType: themeType
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, maxLength.name ? validate.name.active ? validate.name.error : "" : "")))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "d-flex w-100"
  }, /*#__PURE__*/_react["default"].createElement(_Styles.FormGroup, null, /*#__PURE__*/_react["default"].createElement(_Styles.RelativeInput, null, labelAnimate && /*#__PURE__*/_react["default"].createElement(_Styles.Label, {
    activeAnimation: labelActive.numberCard,
    theme: theme,
    themeType: themeType
  }, "N\xFAmero do cart\xE3o"), /*#__PURE__*/_react["default"].createElement(_Styles.DefaultInput, {
    theme: theme,
    themeType: themeType,
    type: "text",
    className: inputClass ? inputClass : "",
    error: maxLength.numberCard ? validate.numberCard.active ? true : false : false,
    maxLength: 19,
    style: inputCSS ? _objectSpread({}, inputCSS) : {},
    name: "nameCard",
    autoComplete: "off",
    placeholder: labelAnimate ? "" : "Número do cartão",
    value: formValue.numberCard || '',
    onChange: function onChange(_ref4) {
      var value = _ref4.target.value;
      return updateCardNumber(value);
    },
    onFocus: function onFocus() {
      return updateLabelActive(true, "numberCard");
    },
    onBlur: function onBlur(_ref5) {
      var value = _ref5.target.value;
      return updateLabelActive(value.length >= 1 ? true : false, "numberCard");
    },
    required: true
  }), cardType.typeOfbandeira && /*#__PURE__*/_react["default"].createElement(_Styles.ImagePosition, {
    src: cardType.encode.image.url.replace("http", "https")
  })), /*#__PURE__*/_react["default"].createElement(_Styles.SmallMessage, {
    theme: theme,
    themeType: themeType
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, maxLength.numberCard ? validate.numberCard.active ? validate.numberCard.error : "" : "")))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "d-flex w-100 justfy-content-between"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-6",
    style: {
      paddingRight: '9px'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Styles.FormGroup, null, /*#__PURE__*/_react["default"].createElement(_Styles.RelativeInput, null, labelAnimate && /*#__PURE__*/_react["default"].createElement(_Styles.Label, {
    activeAnimation: labelActive.validate,
    theme: theme,
    themeType: themeType
  }, "Validade"), /*#__PURE__*/_react["default"].createElement(_Styles.DefaultInput, {
    theme: theme,
    themeType: themeType,
    type: "text",
    maxLength: 5,
    error: maxLength.validate ? validate.validate.active ? true : false : false,
    name: "Validade",
    style: inputCSS ? _objectSpread({}, inputCSS) : {},
    className: inputClass ? inputClass : "",
    autoComplete: "off",
    placeholder: labelAnimate ? "" : "Validade",
    value: formValue.validate || '',
    onChange: function onChange(_ref6) {
      var value = _ref6.target.value;
      return updateValueInput((0, _Mask.ValidateMask)(value), "validate");
    },
    onFocus: function onFocus() {
      return updateLabelActive(true, "validate");
    },
    onBlur: function onBlur(_ref7) {
      var value = _ref7.target.value;
      return updateLabelActive(value.length >= 1 ? true : false, "validate");
    },
    required: true
  })), /*#__PURE__*/_react["default"].createElement(_Styles.SmallMessage, {
    theme: theme,
    themeType: themeType
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, maxLength.validate ? validate.validate.active ? validate.validate.error : "" : "")))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-6",
    style: {
      paddingLeft: '9px'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Styles.FormGroup, null, /*#__PURE__*/_react["default"].createElement(_Styles.RelativeInput, null, labelAnimate && /*#__PURE__*/_react["default"].createElement(_Styles.Label, {
    activeAnimation: labelActive.cvv,
    theme: theme,
    themeType: themeType
  }, "CVV"), /*#__PURE__*/_react["default"].createElement(_Styles.DefaultInput, {
    theme: theme,
    themeType: themeType,
    type: "text",
    maxLength: 3,
    name: "cvv",
    style: inputCSS ? _objectSpread({}, inputCSS) : {},
    error: maxLength.cvv ? validate.cvv.active ? true : false : false,
    autoComplete: "off",
    placeholder: labelAnimate ? "" : "CVV",
    className: inputClass ? inputClass : "",
    value: formValue.cvv || '',
    onChange: function onChange(_ref8) {
      var value = _ref8.target.value;
      return updateValueInput(value, "cvv");
    },
    onFocus: function onFocus() {
      return updateLabelActive(true, "cvv");
    },
    onBlur: function onBlur(_ref9) {
      var value = _ref9.target.value;
      return updateLabelActive(value.length >= 1 ? true : false, "cvv");
    },
    required: true
  })), /*#__PURE__*/_react["default"].createElement(_Styles.SmallMessage, {
    theme: theme,
    themeType: themeType
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, maxLength.cvv ? validate.cvv.active ? validate.cvv.error : "" : ""))))), ButtonSubmit ? /*#__PURE__*/_react["default"].createElement(ButtonSubmit, null) : /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-100 d-flex justify-content-end"
  }, /*#__PURE__*/_react["default"].createElement(_Styles.ButtonDefault, {
    type: "submit",
    theme: theme,
    themeType: themeType
  }, "Salvar cart\xE3o")))))));
};

exports.Form = Form;