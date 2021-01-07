import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

export const GlobalStyle = createGlobalStyle`
  ${reset}

  img,
  iframe,
  object,
  embed,
  video {
    height: auto;
    max-width: 100%;
  }
  *, *:before, *:after {
    box-sizing: border-box;
  }
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: Noto Serif, Garamond, Georgia, Cambria, Cochin, Times,
      "Times New Roman", serif;
    font-size: 16px;
    color: '#1a202c';
  }
  body {
    line-height: 1.5;
      letter-spacing: 0;
    background-color: '#f7fafc';
  }
`
