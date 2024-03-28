import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body, h1, h2, h3, p, ul, ol, li {
    margin: 0;
    padding: 0;
  }

  body {
    font-size: 16px;
    line-height: 1.6;
    color: #333;
    background-color: #cadef3 !important;
  }

`;

export default GlobalStyles;
