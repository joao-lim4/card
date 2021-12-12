import { createGlobalStyle } from 'styled-components';
import FontRoboto from './Roboto-Regular.ttf'

export const GlobalStyles = createGlobalStyle`

    @font-face {
        font-family: 'Roboto';
        src: local('Roboto-Regular'), url(${FontRoboto}) format('truetype');
        font-weight: normal
        font-style: normal;
    }

    *{
        margin: 0;
        padding: 0;
    }
`;