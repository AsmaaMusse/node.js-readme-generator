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

// License related question
const licenseQuestion = [
  {
    type: "list",
    name: "license",
    message: "Choose a license type:",
    choices: ["MIT", "GPL 3.0", "Apache", "BSD", "GPL 2.0"],
  },
];

// Installation related question
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

const generateTitle = (answers) => {
  return `# TITLE ![MIT](https://img.shields.io/static/v1?label=MIT&message=License&color=green)`;
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

  ADD TEXT HERE`;
};

const generateInstallation = (answers) => {
  return `## Installation

Run the following script to install the packages required for the application:

\`\`\`
ADD TEXT HERE
\`\`\``;
};

const generateUsage = (answers) => {
  return `## Usage

To use the application run the following script:

\`\`\`
ADD TEXT HERE
\`\`\``;
};

const generateTests = (answers) => {
  return `## Tests

 To use the application run the following script:

 \`\`\`
 ADD TEXT HERE
 \`\`\``;
};

const generateContributing = (answers) => {
  return `## Contributing

 ADD TEXT HERE`;
};

const generateLicense = (answers) => {
  return `## License

 ADD TEXT HERE`;
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

init();
start();
