// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");
const writeFileSync = util.promisify(fs.writeFile);
const path = require("path");
const { clear } = require("console");

// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "github",
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email",
    },
    {
      type: "input",
      message: "What is your project's email?",
      name: "title",
    },
    {
      type: "input",
      message: "Please write a short description of your project",
      name: "description",
    },
    {
      type: "list",
      message: "What kind of license should your project have?",
      name: "license",
      choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "none"],
    },
    {
      type: "input",
      message: "What command should be run to install dependencies?",
      name: "installation",
    },
    {
      type: "input",
      message: "What command should be run to run test?",
      name: "test",
    },
    {
      type: "input",
      message: "What does the user need to know about using the repo?",
      name: "usage",
    },
    {
      type: "input",
      message:
        "What does the user need to know about contributing to the repo?",
      name: "contributing",
    },
  ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
const init = () => {
  questions()
    .then((answers) => writeToFile("README.md", generateMarkdown(answers)))
    .then(() => console.log("generate README"));
};

// Function call to initialize app
init();
