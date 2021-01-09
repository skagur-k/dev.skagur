import { darken, lighten } from "polished"
// import { fonts } from "../utils/typography"

const calcRem = size => `${size / 16}rem`

const brand = {
  primary: "#573EDE",
  secondary: "#EEF4F2",
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

const fontSize = {
  xs: calcRem(14),
  sm: calcRem(16),
  base: calcRem(18),
  lg: calcRem(20),
  xl: calcRem(22),
  "2xl": calcRem(24),
  "3xl": calcRem(26),
  "4xl": calcRem(28),
  "5xl": calcRem(30),
  "6xl": calcRem(32),
}

const fontWeight = {
  hairline: "100",
  thin: "200",
  light: "300",
  normal: "400",
  medium: "500",
  semibold: "600",
  bold: "700",
  extrabold: "800",
  black: "900",
}

export const media = {
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

const theme = {
  // fonts,
  fontSize,
  fontWeight,
  media,
  brand,
  colors,
}

export default theme
