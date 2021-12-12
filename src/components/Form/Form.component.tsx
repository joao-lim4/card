import React, { CSSProperties, FormEvent, useCallback, useEffect } from "react";
import { useFormContext } from "../../Providers/FormProvider";
import 'bootstrap/dist/css/bootstrap.min.css';
import { RelativeView, CenterView, TextView, DefaultInput, FormGroup, SmallMessage, RelativeInput, ImagePosition, ButtonDefault, Label } from "./Styles";
import { useThemeContext } from "../../Providers/ThemeProvider";
import { cardType, formValueType, InitialFormValue, optionFormValueType } from '../../data/InitialFormValue';
import { CardMask, ValidateMask } from "../../Helpers/Mask";
import Validate from 'validate-flag';


interface onSubmitFormType extends formValueType, cardType {}

export type FormProps = {
    initialData?: optionFormValueType,
    onSubmitForm: (value:onSubmitFormType) => void,
    ButtonSubmit?: React.FC,
    inputClass?: string,
    inputCSS?: CSSProperties,
    labelAnimate?: boolean,
    themeType?: "light" | "dark"
}


const Form: React.FC<FormProps> = ({initialData, onSubmitForm, ButtonSubmit, inputClass, inputCSS, labelAnimate=false, themeType="light"}): JSX.Element => {

    const {formState: { formValue, maxLength, validate, cardType, labelActive}, formDispatch} = useFormContext();
    const theme = useThemeContext();
    

    const updateLabelActive = useCallback((payload: boolean, fildName: "numberCard" | "cvv" | "validate" | "payload" | "name"): void => {
        if(labelAnimate) {
            formDispatch({
                payload: payload,
                type: "update-label-active",
                fildName: fildName
            });
        }
    }, [formDispatch, labelAnimate]);
 
    const updateCardNumber = useCallback((cardNumber: string) => {
       
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
                    fildName: "numberCard",
                    payload: {
                        error: "O cartão informado é inválido!",
                        active: true,
                        name: "Número do cartão"
                    },
                })
            }
        }
        
        if(cardNumber.length >= 1) {
            updateLabelActive(true, "numberCard");
        } else {
            updateLabelActive(false, "numberCard");
        }

        formDispatch({
            payload: CardMask(cardNumber),
            type: "update-form",
            fildName: "numberCard",
        });
    }, [formDispatch, updateLabelActive]);

    const submitForm = useCallback((event: FormEvent) => {
        event.preventDefault();

        let errorCase = false;
        
        for(let key in formValue) {
            if(formValue[key] === "") {
                errorCase = true;
                formDispatch({
                    type: "update-error",
                    fildName: key as "numberCard" | "cvv" | "validate" | "payload" | "name",
                    payload: {
                        error: `O campo ${InitialFormValue.validate[key].name} é obrigatório!`,
                        active: true,
                        name: InitialFormValue.validate[key].name
                    },
                });
            }
        }   

        
        if(errorCase) return;
        
        return onSubmitForm({...formValue, ...cardType});
    }, [formDispatch, cardType, formValue, onSubmitForm]);
    
    const updateValueInput = useCallback((value: string, fildName: "numberCard" | "cvv" | "validate" | "payload" | "name") => {
        
        if(value.length >= 1) {
            updateLabelActive(true, fildName);
        } else {
            updateLabelActive(false, fildName);
        }

        formDispatch({
            payload: value,
            type: "update-form",
            fildName: fildName,
        });
        
    }, [formDispatch, updateLabelActive]);

    useEffect(() => {
        if(initialData) {
            formDispatch({
                type: "init-state",
                payload: {...initialData},
            });
        }
    }, [initialData, formDispatch]);

    useEffect(() => {}, [formValue, maxLength, cardType, validate, labelActive, themeType]);
    
    return (
        <RelativeView>
            <CenterView >
                <TextView>
                    <form onSubmit={submitForm}>
                        <div className='w-100'>
                            <div className="d-flex w-100">
                                <FormGroup>
                                    <RelativeInput>
                                        {labelAnimate && (
                                            <Label activeAnimation={labelActive.name} theme={theme}  themeType={themeType}>Nome no cartão</Label>
                                        )}
                                        <DefaultInput 
                                            theme={theme} themeType={themeType}
                                            className={inputClass ? inputClass : ""}
                                            error={(maxLength.name ? validate.name.active ? true : false : false )}
                                            type="text"
                                            name="nameCard" 
                                            placeholder={labelAnimate ? "" : "Nome no cartão"} 
                                            style={inputCSS ? {...inputCSS} : {}}
                                            value={formValue.name || ''}
                                            autoComplete="off"
                                            onChange={({target: {value}}) => updateValueInput(value, "name")}
                                            onFocus={() => updateLabelActive(true, "name")}
                                            onBlur={({target: {value}}) => updateLabelActive(value.length >= 1 ? true : false, "name")}
                                            required
                                        />
                                    </RelativeInput>
                                    <SmallMessage theme={theme}  themeType={themeType}>
                                        <React.Fragment>
                                            {maxLength.name ? validate.name.active ? validate.name.error : "" : ""}
                                        </React.Fragment>
                                    </SmallMessage>
                                </FormGroup>
                            </div>
                            <div className="d-flex w-100">
                                <FormGroup>
                                    <RelativeInput>
                                        {labelAnimate && (
                                            <Label activeAnimation={labelActive.numberCard} theme={theme}  themeType={themeType}>Número do cartão</Label>
                                        )}
                                        <DefaultInput 
                                            theme={theme}  themeType={themeType}
                                            type="text" 
                                            className={inputClass ? inputClass : ""}
                                            error={(maxLength.numberCard ? validate.numberCard.active ? true : false : false )}
                                            maxLength={19}
                                            style={inputCSS ? {...inputCSS} : {}}
                                            name="nameCard" 
                                            autoComplete="off"
                                            placeholder={labelAnimate ? "" : "Número do cartão"}
                                            value={formValue.numberCard || ''}
                                            onChange={({target: {value}}) => updateCardNumber(value)}
                                            onFocus={() => updateLabelActive(true, "numberCard")}
                                            onBlur={({target: {value}}) => updateLabelActive(value.length >= 1 ? true : false, "numberCard")}
                                            required
                                        />
                                        {cardType.typeOfbandeira && (
                                            <ImagePosition src={cardType.encode.image.url.replace("http", "https")} />
                                        )}
                                    </RelativeInput>
                                    <SmallMessage theme={theme}  themeType={themeType}>
                                        <React.Fragment>
                                            {maxLength.numberCard ? validate.numberCard.active ? validate.numberCard.error : "" : ""}
                                        </React.Fragment>
                                    </SmallMessage>
                                </FormGroup>
                            </div>
                            <div className="d-flex w-100 justfy-content-between">
                                <div className="col-md-6" style={{paddingRight: '9px'}}>
                                    <FormGroup>
                                        <RelativeInput>
                                            {labelAnimate && (
                                                <Label activeAnimation={labelActive.validate} theme={theme}  themeType={themeType}>Validade</Label>
                                            )}
                                            <DefaultInput 
                                                theme={theme}  themeType={themeType}
                                                type="text" 
                                                maxLength={5}
                                                error={(maxLength.validate ? validate.validate.active ? true : false : false )}
                                                name="Validade" 
                                                style={inputCSS ? {...inputCSS} : {}}
                                                className={inputClass ? inputClass : ""}
                                                autoComplete="off"
                                                placeholder={labelAnimate ? "" : "Validade"} 
                                                value={formValue.validate || ''}
                                                onChange={({target: {value}}) => updateValueInput(ValidateMask(value), "validate")}
                                                onFocus={() => updateLabelActive(true, "validate")}
                                                onBlur={({target: {value}}) => updateLabelActive(value.length >= 1 ? true : false, "validate")}
                                                required
                                            />
                                        </RelativeInput>
                                        <SmallMessage theme={theme}  themeType={themeType}>
                                            <React.Fragment>
                                                {maxLength.validate ? validate.validate.active ? validate.validate.error : "" : ""}
                                            </React.Fragment>
                                        </SmallMessage>
                                    </FormGroup>
                                </div>
                                <div className="col-md-6" style={{paddingLeft: '9px'}}>
                                    <FormGroup>
                                        <RelativeInput>
                                            {labelAnimate && (
                                                <Label activeAnimation={labelActive.cvv} theme={theme}  themeType={themeType}>CVV</Label>
                                            )}
                                            <DefaultInput 
                                                theme={theme}  themeType={themeType}
                                                type="text" 
                                                maxLength={3}
                                                name="cvv" 
                                                style={inputCSS ? {...inputCSS} : {}}
                                                error={(maxLength.cvv ? validate.cvv.active ? true : false : false )}
                                                autoComplete="off"
                                                placeholder={labelAnimate ? "" : "CVV"} 
                                                className={inputClass ? inputClass : ""}
                                                value={formValue.cvv || ''}
                                                onChange={({target: {value}}) => updateValueInput(value, "cvv")}
                                                onFocus={() => updateLabelActive(true, "cvv")}
                                                onBlur={({target: {value}}) => updateLabelActive(value.length >= 1 ? true : false, "cvv")}
                                                required
                                            />
                                        </RelativeInput>
                                        <SmallMessage theme={theme}  themeType={themeType}>
                                            <React.Fragment>
                                                {maxLength.cvv ? validate.cvv.active ? validate.cvv.error : "" : ""}
                                            </React.Fragment>
                                        </SmallMessage>
                                    </FormGroup>
                                </div>
                            </div>
                            
                            {ButtonSubmit ? <ButtonSubmit /> : (
                                <div className="w-100 d-flex justify-content-end">
                                    <ButtonDefault type="submit" theme={theme}  themeType={themeType}>
                                        Salvar cartão
                                    </ButtonDefault>
                                </div>
                            )}
                        </div>
                    </form>
                </TextView>
            </CenterView>
        </RelativeView>
    );
}


export { Form };