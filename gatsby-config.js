const siteConfig = require("./config/siteConfig.js")

module.exports = {
  siteMetadata: {
    title: siteConfig.title,
    author: siteConfig.author,
    description: siteConfig.description,
    menuLinks: siteConfig.menuLinks,
    titleTemplate: siteConfig.titleTemplate,
    url: siteConfig.url,
    postsPerPage: siteConfig.postsPerPage,
    social: siteConfig.social,
  },
  plugins: [
    "gatsby-plugin-sharp",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/static/assets/img`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `./src/utils/typography`,
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: ">",
              aliases: {
                sh: "shell",
                js: "javascript",
                env: "bash",
                mdx: "md",
                ".json": "json",
              },
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: "gatsby-remark-responsive-iframe",
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              className: `anchor-header`,
              maintainCase: false,
              removeAccents: true,
              elements: [`h2`, "h3", `h4`],
            },
          },
        ],
      },
    },
    // {
    //   resolve: "gatsby-plugin-manifest",
    //   options: {
    //     name: siteConfig.title,
    //     short_name: siteConfig.titleShort,
    //     description: siteConfig.description,
    //     start_url: siteConfig.pathPrefix,
    //     lang: siteConfig.lang,
    //     background_color: siteConfig.backgroundColor,
    //     theme_color: siteConfig.themeColor,
    //     display: "standalone",
    //     // icons: [
    //     //   {
    //     //     src: "/favicons/android-chrome-192x192.png",
    //     //     sizes: "192x192",
    //     //     type: "image/png",
    //     //   },
    //     //   {
    //     //     src: "/favicons/android-chrome-512x512.png",
    //     //     sizes: "512x512",
    //     //     type: "image/png",
    //     //   },
    //     // ],
    //   },
    // },
  ],
}
