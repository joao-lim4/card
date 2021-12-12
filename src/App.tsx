import React from "react";
import { GlobalStyles } from "./styles/GlobalReset";
import { FormProvider } from "./Providers/FormProvider";
import { Form, FormProps } from "./components/Form/Form.component";
import { ThemeProvider } from "./Providers/ThemeProvider";
// import { Card } from "./components/Card/Card.component";




const FormCard: React.FC<FormProps> = ({onSubmitForm, ButtonSubmit, initialData, inputCSS,inputClass, labelAnimate,themeType}): JSX.Element => {
    return (
        <ThemeProvider>
            <FormProvider>
                <GlobalStyles />
                <Form 
                    onSubmitForm={onSubmitForm} 
                    labelAnimate={labelAnimate} 
                    initialData={initialData} 
                    ButtonSubmit={ButtonSubmit} 
                    inputCSS={inputCSS}
                    themeType={themeType}
                    inputClass={inputClass}
                />
            </FormProvider>
        </ThemeProvider> 
    )
}

export { FormCard }

// function App() {
//     return (
//         <React.Fragment>

//                 <Card />

              
//         </React.Fragment>
//     );
// }

// export default App;
