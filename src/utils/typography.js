import Typography from "typography"
import fairyGateTheme from "typography-theme-fairy-gates"

const typography = new Typography(
  {
    baseFontSize: "18px",
    baseLineHeight: 1.618,
    googleFonts: [
      {
        name: "Noto Serif",
        styles: ["400", "700"],
      },
      {
        name: "Noto Sans",
        styles: ["400", "700"],
      },
    ],
    headerFontFamily: ["Noto Serif", "serif"],
    bodyFontFamily: ["Noto Serif", "serif"],
    headerWeight: 700,
    bodyWeight: 400,
    boldWeight: 700,
  },
  fairyGateTheme
)

// const typography = new Typography(kirkhamTheme)

export const { scale, rhythm, options } = typography
export default typography
