#!/usr/bin/env node

const fs = require("fs")
const path = require("path")
const inquirer = require("inquirer")
const matter = require("gray-matter")
const chalk = require("chalk")
const ora = require("ora")
const clear = require("clear")
const figlet = require("figlet")
const format = require("date-fns/format")
const { promisify } = require("util")
const { kebabCase, omitBy, isEmpty } = require("lodash")

const writeFile = promisify(fs.writeFile)
const readdir = promisify(fs.readdir)
const log = console.log

const postPath = path.join(process.cwd(), "/content/blog")

inquirer.registerPrompt("autocomplete", require("inquirer-autocomplete-prompt"))

const readPosts = async () => {
  const posts = await readdir(postPath)
  return posts
}

const promptTitle = async titles => {
  const result = await inquirer.prompt({
    name: "title",
    message: "Title of the your post: ",
    validate: async val => {
      if (!val) {
        return "You must provide the title of the post."
      }
      if (titles.some(title => title === val)) {
        return "Title already exists."
      }
      return true
    },
  })
  return result.title.toString()
}

const promptCategories = async choices => {
  let result = await inquirer.prompt({
    type: "list",
    name: "category",
    message: "Select category",
    choices: [
      ...choices,
      { name: `${chalk.magenta(`Create new category`)}`, value: -1 },
      { name: `${chalk.red(`No category`)}`, value: null },
    ],
  })

  if (result.category === -1) {
    result = await inquirer.prompt({
      name: "category",
      message: "Enter new Category",
      validate: async val => {
        if (!val) {
          return res("You must provide Category name.")
        }
        return true
      },
    })
  }
  return result.category || ""
}

const promptPublished = async () => {
  let result = await inquirer.prompt({
    type: "list",
    name: "publish",
    message: "Publish this post?",
    choices: [
      { name: "Publish", value: 1 },
      { name: "Do not Publish", value: 0 },
    ],
  })
  return result.publish
}

const confirm = async matters => {
  log(
    chalk.magenta(`
  Preview of the post's frontmatter
  `)
  )
  log(chalk.italic(matters))
  const { proceed } = await inquirer.prompt({
    type: "confirm",
    name: "proceed",
    message: "Do you want to proceed?",
  })
  return proceed
}

const processPosts = posts => {
  const titles = new Set()
  const categories = new Set()
  posts.forEach(filename => {
    const {
      data: { title, category },
    } = matter.read(`${postPath}/${filename}`)
    title && titles.add(title)
    category && categories.add(category)
  })
  return [Array.from(titles), Array.from(categories)]
}

const createMatters = matters => {
  return matter.stringify("", matters)
}

const createPost = async (title, matters) => {
  const kebabTitle = kebabCase(title)
  const path = `${postPath}/${kebabTitle}.md`
  await writeFile(path, matters)
  return path
}

const start = async (titles, categories) => {
  const date = format(new Date(), "yyyy-MM-dd")
  const title = await promptTitle(titles)
  const category = await promptCategories(categories)
  const publish = (await promptPublished()) ? true : false
  const description = ""
  const matters = createMatters({ title, date, category, description, publish })
  const proceed = await confirm(matters)

  if (proceed) {
    try {
      const spinner = ora(`Creating post`).start()
      const createdPath = await createPost(title, matters)
      spinner.succeed(`Created post at ${chalk.bold.green(createdPath)}`)
      return true
    } catch (e) {
      spinner.fail(`${chalk.bgRed("Creating post failed with error:\n")} ${e}`)
    }
    spinner.succeed(`Done 😊`)
  }
  return false
}

const welcome = text => {
  clear()
  console.log(chalk.underline.blue(text))
}

module.exports = (async () => {
  welcome(`Generate blog posts`)

  const spinner = ora(`Fetching post list from -> ${postPath}`).start()
  const posts = await readPosts()
  spinner.succeed(`Fetched post list from -> ${postPath}`)
  const [titles, categories] = processPosts(posts)
  start(titles, categories)
})()
