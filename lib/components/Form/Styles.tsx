import styled from 'styled-components';
import { InitialThemeValueType } from '../../data/InitialThemeValue';

export const RelativeView = styled.div`
    width: 100%;
    position: relative;
`;


export const CenterView = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const TextView = styled.div`
    width: 400px;
    height: 300px;
    position: relative;
`;


export const RelativeInput = styled.div`
    width: 100%;
    height: 45px;
    position: relative;
`;


export const ImagePosition = styled.img`
    height: 60%;
    object-fit: contain;
    position: absolute;
    top: 50%;
    right: 2%;
    transform: translate(-2%, -50%);
`;

export const DefaultInput = styled.input`
    width: 100%;
    height: 45px;
    border-radius: ${({theme, themeType}: {theme: InitialThemeValueType, themeType: "dark" | "light"}) => theme[themeType].input.default.border.radius };
    border: ${({theme, error, themeType}: {theme: InitialThemeValueType, error: boolean, themeType: "dark" | "light"}) => ( !error ? theme[themeType].input.default.border.default : theme[themeType].input.error.border.default)};
    box-shadow: ${({theme, error, themeType}: {theme: InitialThemeValueType, error: boolean, themeType: "dark" | "light"}) => ( !error ? theme[themeType].shadows.default : theme[themeType].input.error.shadow)};
    padding: 0px 10px;
    transition: ${({theme, themeType}: {theme: InitialThemeValueType, themeType: "dark" | "light"}) => theme[themeType].transitions.fast};
    font-family: ${({theme, themeType}: {theme: InitialThemeValueType, themeType: "dark" | "light"}) => theme[themeType].font.default};
    color: ${({theme, themeType}: {theme: InitialThemeValueType, themeType: "dark" | "light"}) => theme[themeType].colors.secondary};
    background: transparent;

    &:focus {
        border: ${({theme,themeType}: {theme: InitialThemeValueType, themeType: "dark" | "light"}) => theme[themeType].efects.input.focus.border};
        outline: 0;
        box-shadow: ${({theme, themeType}: {theme: InitialThemeValueType, themeType: "dark" | "light"}) => theme[themeType].efects.input.focus.shadow};
    }
`

export const FormGroup = styled.div`
    width: 100%;
    /* margin-bottom: 20px; */
    position:relative;
`;

export const SmallMessage = styled.small`
    font-family: ${({theme, themeType}: {theme: InitialThemeValueType, themeType: "dark" | "light"}) => theme[themeType].font.default};
    display: inline-block;
    color: #f70000;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 1rem;
`

export const ButtonDefault = styled.button`
    height: 45px;
    width: calc(50% - 10px);
    justify-content: center;
    align-items: center;
    display: flex;
    background: ${({theme, themeType}: {theme: InitialThemeValueType, themeType: "dark" | "light"}) => theme[themeType].button.bgColor.primary};
    border: ${({theme, themeType}: {theme: InitialThemeValueType, themeType: "dark" | "light"}) => theme[themeType].button.border.default};
    border-radius: ${({theme, themeType}: {theme: InitialThemeValueType, themeType: "dark" | "light"}) => theme[themeType].button.border.radius};
    color: ${({theme, themeType}: {theme: InitialThemeValueType, themeType: "dark" | "light"}) => theme[themeType].colors.primary};
    font-family: ${({theme, themeType}: {theme: InitialThemeValueType, themeType: "dark" | "light"}) => theme[themeType].font.default};
    box-shadow: ${({theme, themeType}: {theme: InitialThemeValueType, themeType: "dark" | "light"}) => theme[themeType].shadows.default};
`;

export const Label = styled.label`
    position: absolute;
    transition: ${({theme, themeType}: {theme: InitialThemeValueType, themeType: "dark" | "light"}) => theme[themeType].transitions.fast};
    font-size: 1rem;
    font-family: ${({theme, themeType}: {theme: InitialThemeValueType, themeType: "dark" | "light"}) => theme[themeType].font.default};
    left: 3%;
    color: ${({activeAnimation, theme, themeType}: {activeAnimation: boolean, theme: InitialThemeValueType, themeType: "dark" | "light"}) => !activeAnimation ? theme[themeType].colors.grey : theme[themeType].colors.secondary};
    z-index: ${({activeAnimation, theme}: {activeAnimation: boolean, theme: InitialThemeValueType, themeType: "dark" | "light"}) => !activeAnimation ? -1 : 1};
    top: ${({activeAnimation, theme}: {activeAnimation: boolean, theme: InitialThemeValueType, themeType: "dark" | "light"}) => !activeAnimation ? '50%' : '-60%'};
    padding: 0px 5px 0px 5px;
    transform: ${({activeAnimation}: {activeAnimation: boolean}) => !activeAnimation ? 'translate(-3%, -50%)' : 'translate(-3%, 60%)'};
    background:  ${({theme, themeType}: {theme: InitialThemeValueType, themeType: "dark" | "light"}) => theme[themeType].colors.primary};
`;