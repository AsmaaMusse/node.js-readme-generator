const inquirer = require("inquirer");
const fs = require("fs");
const util = require("./util");

// declare questions
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of the project?",
  },
  {
    type: "input",
    name: "description",
    message: "What is the description?",
  },
  {
    type: "input",
    name: "applicationUse",
    message: "How do I use the application?",
  },
  {
    type: "input",
    name: "applicationTest",
    message: "How do I test the application?",
  },
  {
    type: "input",
    name: "github",
    message: "What is your github username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?",
  },
  {
    type: "input",
    name: "contribution",
    message: "How can people contribute to this app?",
  },
  {
    type: "confirm",
    name: "license",
    message: "Do you want to add a license badge?",
  },
  {
    type: "confirm",
    name: "installation",
    message: "Do you have an installation process?",
    default: false,
  },
];

// Installation related questions
const licenseQuestion = [
  {
    type: "list",
    name: "license",
    message: "Choose a license type:",
    choices: ["MIT", "GPL 3.0", "Apache", "BSD", "GPL 2.0"],
  },
];

const installationQuestion = [
  {
    type: "input",
    name: "installation",
    message: "what is your installation process?",
  },
];

const start = async () => {
  // prompt questions and get answers
  const answers = await inquirer.prompt(questions);

  if (answers.license) {
    // ask license question
    const licenseAnswer = await inquirer.prompt(licenseQuestion);
  }

  if (answers.installation) {
    // ask installation question
    const installationAnswer = await inquirer.prompt(installationQuestion);
  }

  console.log(answers);
};

start();
