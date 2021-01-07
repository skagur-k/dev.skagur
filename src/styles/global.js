import { css } from "@emotion/react"

const GlobalStyles = css`
  /* Start of Reset Styles */
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* Responsiveness */
  img,
  iframe,
  object,
  embed,
  video {
    height: auto;
    max-width: 100%;
  }
  /* End of Reset Styles */
  html {
    font-size: 18px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: Noto Serif, Garamond, Georgia, Cambria, Cochin, Times,
      "Times New Roman", serif;
  }

  body.light {
    --background: #f6f6f6;
    --text: #222222;
    --divider: #e1e1e1;
  }

  body.dark {
    --background: #282c35;
    --text: #f6f6f6;
    --divider: #54575e;
  }

  body {
    --accent: #01aeef;
    background-color: var(--background);
    color: var(--text);
    transition: background-color 0.4s, color 0.4s;
    font-family: Georgia, Cambria, Cochin, Times, "Times New Roman", serif;
  }
`
export default GlobalStyles
