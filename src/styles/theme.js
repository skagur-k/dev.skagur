const calcRem = size => `${size / 16}rem`

const font = {
  sans: "Noto Sans, sans-serif",
  serif: "Noto Serif, sans",
  monospace: '"Ubuntu Mono", monospace',
}

const fontSize = {
  xs: calcRem(12),
  sm: calcRem(14),
  base: calcRem(16),
  lg: calcRem(18),
  xl: calcRem(20),
  "2xl": calcRem(22),
  "3xl": calcRem(24),
  "4xl": calcRem(26),
  "5xl": calcRem(28),
  "6xl": calcRem(30),
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

const theme = {
  font,
  fontSize,
  fontWeight,
  media,
}

export default theme
