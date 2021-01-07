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
              inlineCodeMarker: null,
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
              className: `anchor-header`, // 이 class명으로 하이라이트 코드를 구현할 예정이므로 반드시 넣자.
              maintainCase: false, // 이 부분은 반드시 false로 하자. url이 대소문자를 구분하기 때문에 링크가 작동하지 않을 수 있다.
              removeAccents: true,
              elements: [`h2`, "h3", `h4`], // 링크를 추가할 Header 종류 선택
            },
          },
        ],
      },
    },
  ],
}
