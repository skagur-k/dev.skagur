import Typography from "typography"
const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.618,
  googleFonts: [
    {
      name: "Noto Sans",
      styles: ["400", "600"],
    },
    {
      name: "Fira Code",
      styles: ["400", "600"],
    },
  ],
  headerWeight: 600,
  bodyWeight: 400,
  boldWeight: 600,
})

export const { scale, rhythm, options } = typography
export default typography
