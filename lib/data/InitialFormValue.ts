export interface formValueType {
    [key: string]: string;
    numberCard: string;
    cvv: string;
    validate: string;
    name: string
}
export interface optionFormValueType {
    numberCard?: string;
    cvv?: string;
    validate?: string;
    name?: string
}

export interface formValidateType {
    [key: string]: string | boolean | undefined;
    error?: string,
    name: string,
    active?: boolean
}

interface maxLengthType {
    [key: string]: boolean
    numberCard: boolean;
    cvv: boolean;
    validate: boolean;
    name: boolean
}

interface lengthType {
    [key: string]: number
    numberCard: number;
    cvv: number;
    validate: number;
    name: number
}

interface ValidateType  {
    [key: string]: formValidateType
    numberCard: formValidateType;
    cvv: formValidateType;
    validate: formValidateType;
    name: formValidateType
}

export interface cardType {
    [key: string]: any,
    dataValue: string 
    encode: {
        encode: boolean,
        image: {
            url: string,
        },
        type: string
    },
    mask: {
        active: boolean,
        valueOffMask: string
    },
    typeOfbandeira: string | undefined
}


interface labelActiveType {
    numberCard: boolean;
    cvv: boolean;
    validate: boolean;
    name: boolean
}

export interface InitialFormValueType {
    formValue: formValueType,
    length: lengthType,
    maxLength: maxLengthType,
    validate: ValidateType,
    cardType: cardType,
    labelActive: labelActiveType
}

export const InitialFormValue: InitialFormValueType = {
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
                url: "",
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
        validate: false,
    }
};


