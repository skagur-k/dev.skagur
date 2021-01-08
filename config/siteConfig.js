const menuLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Blog",
    link: "/blog",
  },
  {
    name: "Study Log",
    link: "/studylog",
  },
  {
    name: "About",
    link: "/about",
  },
]

const siteConfig = {
  title: "log. by nhk",
  titleShort: "log-nhk",
  lang: "en",
  description: "Personal website and blog by namhyuck kim",
  pathPrefix: "/",
  url: "",
  postsPerPage: 9,

  // Author
  author: `namhyuck kim`,
  minibio: ``,

  // Social
  github: `skagur-k`,
  email: `namhyuck.james@gmail.com`,
  linkedin: `skagur0329`,
  instagram: `skagurzz`,

  // Manifest and Progress color
  themeColor: "",
  backgroundColor: "",

  menuLinks,
}

export default siteConfig
