import Typography from "typography"
import fairyGateTheme from "typography-theme-fairy-gates"

const typography = new Typography(
  {
    baseFontSize: "18px",
    baseLineHeight: 1.618,
    googleFonts: [
      {
        name: "Noto Serif KR",
        styles: ["400", "700"],
      },
      {
        name: "Noto Sans KR",
        styles: ["400", "700"],
      },
    ],
    headerFontFamily: ["Noto Sans KR", "sans-serif"],
    bodyFontFamily: ["Noto Sans KR", "serif"],
    headerWeight: 700,
    bodyWeight: 400,
    boldWeight: 700,
  },
  fairyGateTheme
)

export const { scale, rhythm, options } = typography
export default typography
