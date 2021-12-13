import React, { ReactNode, useContext, useReducer } from "react";
import { FormContext } from "../contexts/FormContext";
import { InitialFormValue } from "../data/InitialFormValue";
import { FormReducer } from "../Reducers/FormReducer";


const FormProvider:React.FC<ReactNode> = ({children}): JSX.Element => {
    
    
    const [ formState, formDispatch ] = useReducer(FormReducer,InitialFormValue);

    return (
        <FormContext.Provider value={{formState, formDispatch}}>
            {children}
        </FormContext.Provider>
    )
}


export const useFormContext = () => useContext(FormContext);

export { FormProvider };