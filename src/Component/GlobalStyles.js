import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
  ${reset};
  
  * {
    box-sizing: border-box;
  }
  body {
    font-family: "Noto Sans KR", sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button,
  input,
  textarea {
    font-family: "Noto Sans KR", sans-serif;
    font-size: 16px;
  }

  button:focus,
  button:active,
  input:focus,
  input:active,
  textarea:focus,
  textarea:active {
    outline: none;
    box-shadow: none;
  }

  ul,
  ol,
  li {
    list-style-type: none;
    padding-left: 0;
    margin-left: 0;
  }
`;

export default globalStyles;