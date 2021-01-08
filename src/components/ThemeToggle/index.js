import React, { useState, useEffect } from "react"

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light")
  const isLightMode = theme === "light"

  useEffect(() => {
    setTheme(window.__theme)
    window.__onThemeChange = () => {
      setTheme(window.__theme)
    }
  }, [])

  const toggle = () => {
    window.__setPreferredTheme(isLightMode ? "dark" : "light")
  }

  return <button onClick={toggle}>Change Theme</button>
}

export default ThemeToggle
