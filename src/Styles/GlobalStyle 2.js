import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  * {
    box-sizing: border-box;
    &:focus {
      outline: 0;
    }
  }
  
  body {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

  code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;}

  a {
      text-decoration: none;
      &:hover{
        text-decoration: none;  
      }
  }

  button {
    outline: 0;
    &:focus{
      outline:0;
    }
  }

  button {
    outline: none;
  }
`;

export default GlobalStyle;
