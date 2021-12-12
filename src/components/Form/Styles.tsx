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
    border-radius: ${({theme}: {theme: InitialThemeValueType}) => theme.input.default.border.radius };
    border: ${({theme, error}: {theme: InitialThemeValueType, error: boolean}) => ( !error ? theme.input.default.border.default : theme.input.error.border.default)};
    box-shadow: ${({theme, error}: {theme: InitialThemeValueType, error: boolean}) => ( !error ? theme.shadows.default : theme.input.error.shadow)};
    padding: 0px 10px;
    transition: ${({theme}: {theme: InitialThemeValueType}) => theme.transitions.fast};
    font-family: ${({theme}: {theme: InitialThemeValueType}) => theme.font.default};
    color: ${({theme}: {theme: InitialThemeValueType}) => theme.font.default};

    &:focus {
        border: ${({theme }: {theme: InitialThemeValueType, }) => theme.efects.input.focus.border};
        outline: 0;
        box-shadow: ${({theme}: {theme: InitialThemeValueType}) => theme.efects.input.focus.shadow};
    }
`

export const FormGroup = styled.div`
    width: 100%;
    margin-bottom: 20px;
    position:relative;
`;

export const SmallMessage = styled.small`
    font-family: ${({theme}: {theme: InitialThemeValueType}) => theme.font.default};
    display: inline-block;
    color: #f70000;
    margin-top: 10px;
    font-size: 1rem;
`