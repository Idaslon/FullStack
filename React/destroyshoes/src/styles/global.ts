import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #eee;
    font-size: 16px;
    color: #333;
    font-family: Arial, Helvetica, sans-serif;
  }

`;
