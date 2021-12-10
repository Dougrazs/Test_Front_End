import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  *{
    margin: 0;
    padding:0;
    box-sizing:border-box;
   
  }

  body{
    background: #f5f5f5;
    color: #333;
    
    font-family: 'Raleway', sans-serif;
    font-family: 'Roboto', sans-serif;
    a{
      color: #333;
      text-decoration: none;

      :hover{
        color:black;
      }
    }
  }

`;
export default GlobalStyle;
