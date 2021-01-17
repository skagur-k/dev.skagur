#!/usr/bin/env node

const fs = require("fs")
const path = require("path")
const inquirer = require("inquirer")
const matter = require("gray-matter")
const chalk = require("chalk")
const ora = require("ora")
const clear = require("clear")
const boxen = require("boxen")
const format = require("date-fns/format")
const { promisify } = require("util")
const { kebabCase } = require("lodash")
const open = require("open")

const writeFile = promisify(fs.writeFile)
const readdir = promisify(fs.readdir)
const log = console.log

const postPath = path.join(`${__dirname}/../content/blog`)

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
          return res(`⚠️  You must provide a category!`)
        }
        return true
      },
    })
  }
  return result.category || ""
}

const promptTags = async () => {
  let result = await inquirer.prompt({
    name: "tags",
    message: "Input tags for the post (space as a delimiter)",
    validate: async val => {
      if (!val) {
        return `⚠️  You must provide at least one tag!`
      }
      return true
    },
  })
  results = result.tags.split(" ")
  return results
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

const boxenOptions = {
  padding: 1,
  margin: { left: 0, right: 0, top: 0, bottom: 0 },
  borderStyle: "singleDouble",
  borderColor: "white",
  backgroundColor: "white",
  align: "center",
}

const boxenOptionsPreview = {
  padding: { left: 0, right: 10, top: 0, bottom: 0 },
  margin: { left: 0, right: 0, top: 0, bottom: 0 },
  borderStyle: "single",
  borderColor: "white",
  align: "left",
}

const confirm = async matters => {
  clear()
  log(
    chalk.magenta.bold(`
  Preview
  `)
  )
  previewMsg = boxen(chalk.italic(matters), boxenOptionsPreview)
  log(previewMsg)
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

const openEditor = async filePath => {
  const spinner = ora(`Opening file with VSCode`).start()
  await open(filePath, { app: `visual studio code`, wait: false })
  spinner.succeed(`Start writing :)`)
  return true
}

const start = async (titles, categories, taglist) => {
  const date = format(new Date(), "yyyy-MM-dd hh:mm")
  log(`The time is: ${date}`)
  log(`-----------------------------------------`)
  const title = await promptTitle(titles)
  const category = await promptCategories(categories)
  const tags = await promptTags(taglist)
  const publish = (await promptPublished()) ? true : false
  const description = ""
  const matters = createMatters({ title, date, category, description, tags, publish })
  const proceed = await confirm(matters)

  if (proceed) {
    try {
      const spinner = ora(`Creating post`).start()
      const createdPath = await createPost(title, matters)
      spinner.succeed(`Created post at: \n → ${chalk.bold.green(createdPath)}`)
      openEditor(createdPath)
      return true
    } catch (e) {
      spinner.fail(`${chalk.bgRed("Creating post failed with error:\n")} ${e}`)
    }
  }
  return false
}

const welcome = text => {
  clear()
  boxenMsg = boxen(chalk.black.bold(text), boxenOptions)
  log(boxenMsg)
}

module.exports = (async () => {
  welcome(`Generate blog post`)

  const spinner = ora(`Fetching post list from -> ${postPath}`).start()
  const posts = await readPosts()
  spinner.succeed(`Fetched post list from -> ${postPath}`)
  spinner.start(`Processing markdown frontmatters`)
  const [titles, categories, tags] = processPosts(posts)
  spinner.succeed(`Successfully processed markdown frontmatters`)
  log(`-----------------------------------------`)
  start(titles, categories, tags)
})()
