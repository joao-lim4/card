import { createContext } from 'react';
import { InitialThemeValue, InitialThemeValueType } from '../data/InitialThemeValue';


const ThemeContext = createContext<InitialThemeValueType>(InitialThemeValue);

export { ThemeContext };