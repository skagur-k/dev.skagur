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

  html {
    font-size: 16px;
    color: '#1a202c';
  }

  h1, h2, h3, h4{
    font-family: 'Noto Sans', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  body.light {
    --bg: #F1F1F1;
    --text: #000000
    --component: #F4F4F4;
    --menuBg: #DCDCDC;
    --terminalTabSelect: #CFCFCF;
    --terminalTabUnselect: #E5E5E5;
    --socialColor: #4F4F4F;
  }

  body.dark {
    --bg: #363636;
    --text: #FFFFFF
    --component: #1B1B1B;
    --menuBg: #5C5C5C;
    --terminalTabSelect: #CFCFCF;
    --terminalTabUnselect: #A0A0A0;
    --socialColor: #FFFFFF;

  }

  body {
    //todo: temp & return ssr
    --bg: #F1F1F1;
    --text: #000000
    --component: #F4F4F4;
    --menuBg: #DCDCDC;
    --terminalTabSelect: #CFCFCF;
    --terminalTabUnselect: #E5E5E5;
    --socialColor: #4F4F4F;

    background: var(--bg);
    color: var(--text);
    transition: background-color 0.1s linear, color 0.5s linear;

    text-shadow: 0 0 0.1px rgba(0, 0, 0, 0.3);
    -webkit-text-size-adjust: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
    text-rendering: optimizelegibility;
  }
`

export default GlobalStyles
