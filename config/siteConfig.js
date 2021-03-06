const menuLinks = [
  {
    name: "home",
    link: "/",
    icon: "GoHome",
  },
  {
    name: "blog",
    link: "/blog",
    icon: "GoPencil",
  },
  {
    name: "projects",
    link: "/projects",
    icon: "GoProject",
  },
  {
    name: "about",
    link: "/about",
    icon: "GoMegaphone",
  },
]

const social = [
  {
    name: "github",
    username: "skagur-k",
  },
  {
    name: "email",
    username: "namhyuck.james@gmail.com",
  },
  {
    name: "instagram",
    username: "skagurzz",
  },
  {
    name: "linkedin",
    username: "skagur0329",
  },
]

module.exports = {
  title: "dev-log by nh kim",
  titleShort: "dev-log",
  titleTemplate: `%s | dev-log by nhkim`,
  lang: "en",
  description: "Personal website and blog by namhyuck kim",
  pathPrefix: "/",
  url: "",
  postsPerPage: 9,

  // Author
  author: `namhyuck kim`,
  minibio: ``,
  // Manifest and Progress color
  themeColor: "",
  backgroundColor: "",

  social,
  menuLinks,
}
