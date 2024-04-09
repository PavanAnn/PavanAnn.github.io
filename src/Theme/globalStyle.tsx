import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body, h1, h2, h3, p, ul, ol, li {
  margin: 0;
  padding: 0;
  color: #fafafb !important;
}


  body {
    font-size: 16px;
    line-height: 1.6;
    background-color: #010001 !important;
  }


`;



export default GlobalStyles;
