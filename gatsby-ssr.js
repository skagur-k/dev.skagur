import React from "react"
import "prismjs/themes/prism-tomorrow.css"
import "prismjs/plugins/line-numbers/prism-line-numbers.css"

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    React.createElement("script", {
      dangerouslySetInnerHTML: {
        __html: `
          ((){
            window.__onThemeChange = function() {};

            // Function that sets new theme passed down from setPreferredTheme(newTheme)
            function setTheme(newTheme){
              window.__theme = newTheme;
              preferredTheme = newTheme;
              document.body.className = newTheme;
              window.__onThemeChange(newTheme);
            }

            // Get preferred theme from localStorage
            let preferredTheme
            try{
              preferredTheme = localStorage.getItem('theme')
            } catch (err) {
              console.log("Getting theme from localStoragee failed with error")
            }

            // Set Preferred theme in localStoragee
            window.__setPreferredTheme = newTheme => {
              setTheme(newTheme)
              try{
                localStorage.setItem('theme', newTheme)
              } catch (err){
                console.log("Setting theme in localStorage failed with error.")
              }
            }

            // Queries user's preferred theme
            let prefers-color-scheme = window.matchMedia('(prefers-color-scheme: dark)')
            prefers-color-scheme.addListener(e => {
              window.__setPreferredTheme(e.matches ? 'light' : 'dark')
            })

            // Use preferredTheme stored in localStorage, if there is any, or use system color mode.
            setTheme(preferredTheme || (prefers-color-scheme.matches ? 'light' : 'dark'))
          })()
        `,
      },
    }),
  ])
}
