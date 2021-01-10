import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

const GlobalStyles = createGlobalStyle`
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
    font-size: 18px;
    color: '#1a202c';
  }

  body.light {
    --body: #F6F6F6;
    --text: #222222;
    --divider: #E1E1E1;
  }

  body.dark {
    --body: #282C35;
    --text: white;
    --divider: #54575e;
    -webkit-font-smoothing: antialiased;
  }

  body {

    background: var(--body);
    color: var(--text);
    transition: color 1s linear;

    text-shadow: 0 0 0.1px rgba(0, 0, 0, 0.3);
    -webkit-text-size-adjust: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
    text-rendering: optimizelegibility;
  }
`

export default GlobalStyles
