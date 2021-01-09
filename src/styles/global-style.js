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
    font-size: 18px;
    color: '#1a202c';
  }

  body.light {
    --background: #F6F6F6;
    --text: #222222;
    --divider: #E1E1E1;
  }

  body.dark {
    --background: #282C35;
    --text: #F6F6F6;
    --divider: #54575e;
  }

  body {
    --accent: #01AEEF;
    background-color: var(--background);
    color: var(--text);
    transition: background-color 0.4s, color 0.4s;
  }
`
