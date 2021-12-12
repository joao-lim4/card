import React, { ReactNode, useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { InitialThemeValue } from "../data/InitialThemeValue";

const ThemeProvider:React.FC<ReactNode> = ({children}): JSX.Element => {
    
    return (
        <ThemeContext.Provider value={InitialThemeValue}>
            {children}
        </ThemeContext.Provider>
    )
}


export const useThemeContext = () => useContext(ThemeContext);

export { ThemeProvider };