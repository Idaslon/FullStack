import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #7f2ed0;
    color: #333;
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
  }

`;
