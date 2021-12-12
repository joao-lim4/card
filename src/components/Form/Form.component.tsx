import React, { useEffect } from "react";
import { useFormContext } from "../../Providers/FormProvider";
import 'bootstrap/dist/css/bootstrap.min.css';
import { RelativeView, CenterView, TextView, DefaultInput, FormGroup, SmallMessage, RelativeInput, ImagePosition } from "./Styles";
import { useThemeContext } from "../../Providers/ThemeProvider";
import { optionFormValueType } from '../../data/InitialFormValue';
import { CardMask, ValidateMask } from "../../Helpers/Mask";
import Validate from 'validate-flag';


type FormProps = {
    initialData?: optionFormValueType 
}

const Form: React.FC<FormProps> = ({initialData}): JSX.Element => {

    const {formState: { formValue, maxLength, validate, cardType }, formDispatch} = useFormContext();
    const theme = useThemeContext();
    
 
    const updateCardNumber = (cardNumber: string) => {
       
        const [ validateCard ] = Validate.checkBandeiraToImage(cardNumber);
        if(validateCard.hasOwnProperty("success")) {
            formDispatch({
                payload: { 
                    dataValue: validateCard.dataValue,
                    encode: {...validateCard.encode},
                    mask: {...validateCard.mask},
                    typeOfbandeira: validateCard.typeOfbandeira
                },
                type: "update-card-type"
            });
        } else {
            if(cardNumber.length === 19) {
                formDispatch({
                    type: "update-error",
                    fildName: "name",
                    payload: {
                        error: "O cartão informado é inválido!",
                        active: true,
                        name: "Número do cartão"
                    },
                })
            }
        }
        

        formDispatch({
            payload: CardMask(cardNumber),
            type: "update-form",
            fildName: "numberCard",
        });
    }

    useEffect(() => {
        if(initialData) {
            formDispatch({
                type: "init-state",
                payload: {...initialData},
            });
        }
    }, [initialData, formDispatch]);

    useEffect(() => {console.log(validate)}, [formValue, maxLength, cardType, validate]);

    return (
        <RelativeView>
            <CenterView>
                <TextView>
                    <div className='w-100'>
                        <div className="d-flex w-100">
                            <FormGroup>
                                <DefaultInput 
                                    theme={theme}
                                    error={(maxLength.name ? validate.name.active ? true : false : false )}
                                    type="text"
                                    name="nameCard" 
                                    placeholder="Nome impresso no cartão" 
                                    value={formValue.name || ''}
                                    autoComplete="off"
                                    onChange={({target: {value}}) => formDispatch({
                                        payload: value,
                                        type: "update-form",
                                        fildName: "name",
                                    })}
                                />
                                <SmallMessage theme={theme}>
                                    <React.Fragment>
                                        {maxLength.name ? validate.name.active ? validate.name.error : "" : ""}
                                    </React.Fragment>
                                </SmallMessage>
                            </FormGroup>
                        </div>
                        <div className="d-flex w-100">
                            <FormGroup className="d-flex">
                                <RelativeInput>
                                    <DefaultInput 
                                        theme={theme}
                                        type="text" 
                                        error={(maxLength.numberCard ? validate.numberCard.active ? true : false : false )}
                                        maxLength={19}
                                        name="nameCard" 
                                        autoComplete="off"
                                        placeholder="Número do cartão" 
                                        value={formValue.numberCard || ''}
                                        onChange={({target: {value}}) => updateCardNumber(value)}
                                    />
                                    {cardType.typeOfbandeira && (
                                        <ImagePosition src={cardType.encode.image.url.replace("http", "https")} />
                                    )}
                                </RelativeInput>
                                <SmallMessage theme={theme}>
                                    <React.Fragment>
                                        {maxLength.numberCard ? validate.numberCard.active ? validate.numberCard.error : "" : ""}
                                    </React.Fragment>
                                </SmallMessage>
                            </FormGroup>
                        </div>
                        <div className="d-flex w-100 justfy-content-between">
                            <div className="col-md-6" style={{paddingRight: '9px'}}>
                                <FormGroup>
                                    <DefaultInput 
                                        theme={theme}
                                        type="text" 
                                        maxLength={5}
                                        error={(maxLength.validate ? validate.validate.active ? true : false : false )}
                                        name="Validade" 
                                        autoComplete="off"
                                        placeholder="Validade" 
                                        value={formValue.validate || ''}
                                        onChange={({target: {value}}) => formDispatch({
                                            payload: ValidateMask(value),
                                            type: "update-form",
                                            fildName: "validate",
                                        })}
                                    />
                                    <SmallMessage theme={theme}>
                                        <React.Fragment>
                                            {maxLength.validate ? validate.validate.active ? validate.validate.error : "" : ""}
                                        </React.Fragment>
                                    </SmallMessage>
                                </FormGroup>
                            </div>
                            <div className="col-md-6" style={{paddingLeft: '9px'}}>
                                <FormGroup>
                                    <DefaultInput 
                                        theme={theme}
                                        type="text" 
                                        maxLength={3}
                                        name="cvv" 
                                        error={(maxLength.cvv ? validate.cvv.active ? true : false : false )}
                                        autoComplete="off"
                                        placeholder="CVV" 
                                        value={formValue.cvv || ''}
                                        onChange={({target: {value}}) => formDispatch({
                                            payload: value,
                                            type: "update-form",
                                            fildName: "cvv",
                                        })}
                                    />
                                    <SmallMessage theme={theme}>
                                        <React.Fragment>
                                            {maxLength.cvv ? validate.cvv.active ? validate.cvv.error : "" : ""}
                                        </React.Fragment>
                                    </SmallMessage>
                                </FormGroup>
                            </div>
                        </div>
                    </div>
                </TextView>
            </CenterView>
        </RelativeView>
    );
}


export { Form };