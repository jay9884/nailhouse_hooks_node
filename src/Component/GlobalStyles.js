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

  .container {
    width: 100%;
    max-width: 720px;
    padding: 0 10px;
    margin: 0 auto;
    /* background-color: blue; */
  }

  .row {
      display : flex;
      flex-wrap: wrap;
      margin-right: -10px;
      margin-left: -10px;
  }

  .col-1 {
      width: 8.333333%;
      padding: 0 10px;
  }

  .col-2 {
      width: 16.666667%;
      padding: 0 10px;
  }

  .col-3 {
      width: 25%;
      padding: 0 10px;
  }

  .col-4 {
      width: 33.333333%;
      padding: 0 10px;
  }

  .col-5 {
      width: 41.666666%;
      padding: 0 10px;
  }

  .col-6 {
      width: 50%;
      padding: 0 10px;
  }

  .col-7 {
      width: 58.333333%;
      padding: 0 10px;
  }

  .col-8 {
      width: 66.666666%;
      padding: 0 10px;
  }

  .col-9 {
      width: 75%;
      padding: 0 10px;
  }

  .col-10 {
      width: 83.333333%;
      padding: 0 10px;
  }

  .col-11 {
      width: 91.666666%;
      padding: 0 10px;
  }

  .col-12 {
      width: 100%;
      padding: 0 10px;
  }

  @media screen and (min-width : 768px) {
      .container {
          max-width: 780px;
          /* background-color: #356fed; */
      }

      .col-md-1 {
          width: 8.333333%;
          padding: 0 10px;
      }
      
      .col-md-2 {
          width: 16.666667%;
          padding: 0 10px;
      }
      
      .col-md-3 {
          width: 25%;
          padding: 0 10px;
      }
      
      .col-md-4 {
          width: 33.333333%;
          padding: 0 10px;
      }
      
      .col-md-5 {
          width: 41.666666%;
          padding: 0 10px;
      }
      
      .col-md-6 {
          width: 50%;
          padding: 0 10px;
      }
      
      .col-md-7 {
          width: 58.333333%;
          padding: 0 10px;
      }
      
      .col-md-8 {
          width: 66.666666%;
          padding: 0 10px;
      }
      
      .col-md-9 {
          width: 75%;
          padding: 0 10px;
      }
      
      .col-md-10 {
          width: 83.333333%;
          padding: 0 10px;
      }
      
      .col-md-11 {
          width: 91.666666%;
          padding: 0 10px;
      }
      
      .col-md-12 {
          width: 100%;
          padding: 0 10px;
      }
  }

  @media screen and (min-width : 1024px) {
      .container {
          max-width: 1140px;
          /* background-color: #ff7777; */
      }

      .col-xl-1 {
          width: 8.333333%;
          padding: 0 10px;
      }
      
      .col-xl-2 {
          width: 16.666667%;
          padding: 0 10px;
      }
      
      .col-xl-3 {
          width: 25%;
          padding: 0 10px;
      }
      
      .col-xl-4 {
          width: 33.333333%;
          padding: 0 10px;
      }
      
      .col-xl-5 {
          width: 41.666666%;
          padding: 0 10px;
      }
      
      .col-xl-6 {
          width: 50%;
          padding: 0 10px;
      }
      
      .col-xl-7 {
          width: 58.333333%;
          padding: 0 10px;
      }
      
      .col-xl-8 {
          width: 66.666666%;
          padding: 0 10px;
      }
      
      .col-xl-9 {
          width: 75%;
          padding: 0 10px;
      }
      
      .col-xl-10 {
          width: 83.333333%;
          padding: 0 10px;
      }
      
      .col-xl-11 {
          width: 91.666666%;
          padding: 0 10px;
      }
      
      .col-xl-12 {
          width: 100%;
          padding: 0 10px;
      }
  }

`;

export default globalStyles;