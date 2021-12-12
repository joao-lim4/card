import React, { createContext } from 'react';
import { InitialFormValue, InitialFormValueType } from '../data/InitialFormValue';
import { ActionTypeReducer } from '../Reducers/FormReducer';

export type FormContextType = {
    formState: InitialFormValueType
    formDispatch: React.Dispatch<ActionTypeReducer>;
}

const FormContext = createContext<FormContextType>({
    formState: InitialFormValue,
    formDispatch: (): void => {}
});

export { FormContext };