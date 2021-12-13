"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InitialFormValue = void 0;
var InitialFormValue = {
  formValue: {
    numberCard: "",
    cvv: "",
    name: "",
    validate: ""
  },
  length: {
    numberCard: 19,
    cvv: 3,
    validate: 5,
    name: 1
  },
  maxLength: {
    numberCard: false,
    cvv: false,
    validate: false,
    name: false
  },
  validate: {
    cvv: {
      name: "CVV"
    },
    name: {
      name: "Nome"
    },
    numberCard: {
      name: "Número do cartão"
    },
    validate: {
      name: "Validade"
    }
  },
  cardType: {
    dataValue: "",
    encode: {
      encode: false,
      image: {
        url: ""
      },
      type: ""
    },
    mask: {
      active: false,
      valueOffMask: ""
    },
    typeOfbandeira: undefined
  },
  labelActive: {
    cvv: false,
    name: false,
    numberCard: false,
    validate: false
  }
};
exports.InitialFormValue = InitialFormValue;