"use strict"

module.exports = {
  title: `DEV-SKAGUR`,
  description: `Personal website and blog by Nam Hyuck Kim`,
  pathPrefix: "/",
  postsPerPage: 15,
  titleTemplate: `%s | ${title}`,
  url: "https://www.doe.com", // No trailing slash allowed!
  author: {
    name: `Namhyuck Kim`,
    summary: ``,
    social: {
      github: `skagur-k`,
      email: `namhyuck.james@gmail.com`,
      linkedin: `skagur0329`,
      instagram: `skagurzz`,
    },
  },
  menuLinks: [
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
  ],
}
