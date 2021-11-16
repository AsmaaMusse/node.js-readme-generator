const inquirer = require("inquirer");
const fs = require("fs");
const util = require("./util");

// Declare questions
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
    name: "usage",
    message: "How do I use the application?",
  },
  {
    type: "input",
    name: "test",
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
    type: "list",
    name: "license",
    message: "Choose a license type:",
    choices: ["MIT", "GPL 3.0", "Apache", "BSD", "GPL 2.0"],
  },
  {
    type: "input",
    name: "installation",
    message: "What is your installation process?",
  },
];

const start = async () => {
  // prompt questions and get answers
  const answers = await inquirer.prompt(questions);
  const readme = generateReadme(answers);

  // write generated readme to a file
  writeToFile("GENERATED_README.md", readme);

  // if (answers.license) {
  //   // ask license question
  //   const licenseAnswer = await inquirer.prompt(licenseQuestion);
  // }

  // if (answers.installation) {
  //   // ask installation question
  //   const installationAnswer = await inquirer.prompt(installationQuestion);
  // }
};

const generateTitle = (answers) => {
  return `#Title [MIT](https://img.shields.io/static/v1?label=${answers.title}&message=License&color=orange)`;
};

const generateTableOfContents = (answers) => {
  return `## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Tests](#tests)
  - [Contributing](#contributing)
  - [License](#license)`;
};

const generateDescription = (answers) => {
  return `## Description

  ${answers.description}`;
};

const generateInstallation = (answers) => {
  return `## Installation

 Run the following script to install the packages required for the application:

 \`\`\`
 ${answers.installation}
 \`\`\``;
};

const generateUsage = (answers) => {
  return `## Usage

 To use the application run the following script:

 \`\`\`
 ${answers.usage}
 \`\`\``;
};

const generateTests = (answers) => {
  return `## Tests

 To use the application run the following script:

 \`\`\`
 ${answers.tests}
 \`\`\``;
};

const generateContributing = (answers) => {
  return `## Contributing

 ${answers.contribution}`;
};

const generateLicense = (answers) => {
  return `## License

 ${answers.license}`;
};

const generateReadme = (answers) => {
  return `${generateTitle(answers)}

 ${generateTableOfContents(answers)}

 ${generateDescription(answers)} 
 
 ${generateInstallation(answers)}

 ${generateUsage(answers)}

 ${generateTests(answers)}

 ${generateContributing(answers)}

 ${generateLicense(answers)}
 `;
};

const writeToFile = (filePath, data) => {
  try {
    fs.writeFileSync(filePath, data);
  } catch (error) {
    console.log(error.message);
  }
};

start();
