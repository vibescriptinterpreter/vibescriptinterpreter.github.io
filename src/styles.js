import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    height: 100%;
  }
  body {
    min-width: 320px;
    margin: 0;
    overflow-x: hidden;
    font-family: 'Roboto', sans-serif
  }
  *, *:after, *:before {
    box-sizing: inherit;
  }
  ul {
    padding-left: 0;
  }
  ul li {
    list-style-type: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;