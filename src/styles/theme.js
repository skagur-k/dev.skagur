import { darken, lighten } from "polished"

const calcRem = size => `${size / 16}rem`

const brand = {
  primary: "#1773B2",
  secondary: "#CE2E22",
  tertiary: "#DBE84E",
}

const menuColors = {
  close: "#ED6B61",
  minimize: "#FFBC30",
  maximizeBg: "#00CB4D",
  maximizePoint: "#03651A",
}

const colors = {
  primary_light: `${lighten(0.55, brand.primary)}`,
  gray: "#D3D3D3",
  black: "#000",
  white: "#fff",
  bg_color: "#fafafa",
  body_color: "#222426",
  link_color: brand.primary,
  link_color_hover: `${darken(0.07, brand.primary)}`,
  red: "#E75248",
  green: "#17A974",
  blue: "#327CDC",
  yellow: "#FFB700",
  purple: "#8242F6",
  purple_dark: "#231c42",
}

const media = {
  large: "1170px",
  medium: "768px",
  small: "480px",
  header: "848px",
  socialLinks: "960px",
  mastheadInfo: "416px",
  paginationText: "360px",
  homePosts2Columns: "848px",
  homePosts1Column: "600px",
}

const typography = {
  // General
  H1_Headline: `
    font-size: ${calcRem(28)};
    font-weight: semibold;
  `,
  H2_Headline: `
    font-size: ${calcRem(24)};
    font-weight: semibold;
  `,
  H3_Headline: `
    font-size: ${calcRem(20)};
    font-weight: semibold;
  `,
  H4_Headline: `
    font-size: ${calcRem(18)};
    font-weight: semibold;
  `,

  General_Body1: `
    font-size: ${calcRem(16)};
    font-weight: normal;
  `,
  General_Body2: `
    font-size: ${calcRem(14)};
    font-weight: normal;
  `,
  General_Body3: `
    font-size: ${calcRem(12)};
    font-weight: normal;
  `,
  General_Terminal: `
    font-family: 'Fira Code', Georgia, Cambria, Cochin, Times, 'Times New Roman', serif;
    font-size: ${calcRem(14)};
    font-weight: normal;
  `,

  ResetButtonStyles: `
    cursor: pointer;
    border: none;
    border-radius: 5;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    text-align: inherit;
    background: transparent;
    color: inherit;
    font: inherit;
    line-height: normal;
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
    -webkit-appearance: none;
  `,
}

const theme = {
  typography,
  media,
  brand,
  colors,
  menuColors,
}

export default theme
