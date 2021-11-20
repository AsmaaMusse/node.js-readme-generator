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
  writeToFile("generatedReadme.md", readme);
};

const generateTitle = (answers) => {
  return `# ${answers.title} ![MIT](https://img.shields.io/static/v1?label=${answers.license}&message=License&color=orange)`;
};

const generateTableOfContents = () => {
  return `## Table of Contents
   \`
    1. [Description](#description)
    2. [Installation](#installation)
    3. [Usage](#usage)
    4. [Tests](#tests)
    5. [Contributing](#contributing)
    6. [License](#license)
    7. [contacts](#contacts)`;
};

const generateDescription = (answers) => {
  return `## Description
   
   <a id="description"></a>
  
    \`\`\`
    ${answers.description}
    \`\`\``;
};

const generateInstallation = (answers) => {
  return `## Installation

   <a id="installation"></a>
  
   Run the following script to install the packages required for the application:
  
   \`\`\`
   ${answers.installation}
   \`\`\``;
};

const generateUsage = (answers) => {
  return `## Usage

   <a id="usage"></a>
  
   To use the application run the following script:
  
   \`\`\`
   ${answers.usage}
   \`\`\``;
};

const generateTests = (answers) => {
  return `## Tests

   <a id="tests"></a>
  
   To use the application run the following script:
  
   \`\`\`
   ${answers.tests}
   \`\`\``;
};

const generateContributing = (answers) => {
  return `## Contributing
   
   <a id="contributing"></a>

   To contribute to the application you could:
   
   \`\`\`
   ${answers.contribution}
   \`\`\``;
};

const generateLicense = (answers) => {
  return `## License

  <a id="license"></a>
  
  \`\`\`
   ${answers.license}
   \`\`\``;
};

const generateContacts = (answers) => {
  return `## Contact info

  <a id="contacts"></a>
  
  For further question, contact me on:

  \`\`\`
   ${answers.github}
   ${answers.email}
   \`\`\``;
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

 ${generateContacts(answers)}
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
