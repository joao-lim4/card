import React from "react";
import { GlobalStyles } from "./styles/GlobalReset";
import { FormProvider } from "./Providers/FormProvider";
import { Form } from "./components/Form/Form.component";
import { ThemeProvider } from "./Providers/ThemeProvider";

function App() {
    return (
        <React.Fragment>
            <GlobalStyles />
                <ThemeProvider>
                    <FormProvider>
                        <Form />
                    </FormProvider>
                </ThemeProvider>
        </React.Fragment>
    );
}

export default App;
