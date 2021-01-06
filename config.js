"use strict"

const title = "DEV-SKAGUR"
const description = "Personal website and blog by Nam Hyuck Kim"
const postsPerPage = 9
const url = "https://www.doe.com"
const author = {
  name: `Namhyuck Kim`,
  summary: ``,
  social: {
    github: `skagur-k`,
    email: `namhyuck.james@gmail.com`,
    linkedin: `skagur0329`,
    instagram: `skagurzz`,
  },
}
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
    name: "About",
    link: "/about",
  },
]

module.exports = {
  title: title,
  description: description,
  postsPerPage: postsPerPage,
  titleTemplate: `%s | ${title}`,
  url: url, // No trailing slash allowed!
  author: author,
  menuLinks: menuLinks,
}
