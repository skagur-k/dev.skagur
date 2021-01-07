const siteConfig = require("./config.js")

module.exports = {
  siteMetadata: {
    title: siteConfig.title,
    author: siteConfig.author,
    description: siteConfig.description,
    menuLinks: siteConfig.menuLinks,
    titleTemplate: siteConfig.titleTemplate,
    url: siteConfig.url, // No trailing slash allowed!
    postsPerPage: siteConfig.postsPerPage,
  },
  plugins: [
    "gatsby-plugin-sharp",
    "gatsby-plugin-emotion",
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
  ],
}
