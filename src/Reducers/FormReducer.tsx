import Validate from "validate-flag";
import { formValidateType, InitialFormValue, InitialFormValueType } from "../data/InitialFormValue";


export type ActionTypeReducer = {
    type: "update-form" | "update-validate" | "init-state" | "update-error" | "update-card-type" | "reset-card-type" | "update-label-active";
    fildName?: "numberCard" | "cvv" | "validate" | "payload" | "name";
    payload: any
}

const updateMaxLength = (state: InitialFormValueType, fildName: string, payload: string) => {
    const valueMaxLength = payload.length === state.length[fildName] ? true : state.maxLength[fildName];
    return {
        ...state.maxLength,
        [fildName]: valueMaxLength,
    };
}

const updateValidate = (state: InitialFormValueType, fildName: string, payload: string) => {
    
    const validateObjectData:formValidateType = {
        ...state.validate[fildName],
    }

    if(state.maxLength[fildName] && payload.length < state.length[fildName]) {
        validateObjectData.error = `O campo ${validateObjectData.name} é obrigatório!`;
        validateObjectData.active = true;
    } else {
        validateObjectData.error = "";
        validateObjectData.active = false;
    };

    return {
        ...state.validate,
        [fildName]: validateObjectData
    };
}

const createInitFormValue = (payload:any) => {
    return {
        ...payload,
        numberCard: (() => {
            if(payload.numberCard) {
                if(payload.numberCard.length >= 16) {
                    return payload.numberCard.substring(0,16);
                }
                return payload.numberCard;
            }
            
            return "";
        })()
    }
}

const createCardType = (numberCard: string | undefined) => {
    if(numberCard) {
        const [ validateCard ] = Validate.checkBandeiraToImage(numberCard);
        if(validateCard.hasOwnProperty("success")) {
                return { 
                    dataValue: validateCard.dataValue,
                    encode: {...validateCard.encode},
                    mask: {...validateCard.mask},
                    typeOfbandeira: validateCard.typeOfbandeira
                }
        }
    }

    return InitialFormValue.cardType;
}


const FormReducer = (state: InitialFormValueType, action: ActionTypeReducer) => {

    const { fildName, payload, type } = action;

    switch (type) {
        case 'update-form': {
            return {
                ...state,
                formValue: {
                    ...state.formValue,
                    [fildName!]: payload
                },
                maxLength: updateMaxLength(state, fildName!, payload),
                validate: updateValidate(state, fildName!, payload),
            } as InitialFormValueType;
        }
        case 'update-validate': {
            return {
                ...state,
                validate: {
                    ...state.validate,
                    [fildName!]: payload
                }
            } as InitialFormValueType;
        }

        case 'init-state': {
            return {
                ...state,
                formValue: createInitFormValue(payload),
                cardType: createCardType(payload.numberCard),
            } as InitialFormValueType;
        }

        case "update-error": {
            return {
                ...state,
                validate: {
                    ...state.validate,
                    [fildName!]: {...payload}
                }
            } as InitialFormValueType;
        }
        case "update-card-type": {
            return {
                ...state,
                cardType: {...payload}
            } as InitialFormValueType;
        }

        case "reset-card-type": {
            return {
                ...state,
                cardType: InitialFormValue.cardType
            } as InitialFormValueType;
        }


        case "update-label-active": {
            return {
                ...state,
                labelActive: {
                    ...state.labelActive,
                    [fildName!]: payload
                }
            } as InitialFormValueType;
        }
        default:
            return {...state};
    }
}


export { FormReducer };