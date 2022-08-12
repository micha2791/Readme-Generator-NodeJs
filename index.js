const inquirer = require("inquirer");
const fs = require("fs");

const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Please describe your project.",
    },
    {
        type: "list",
        name: "license",
        message: "What is the license of your project?",
        choices: ['MIT', 'Private']
    },
    {
        type: "input",
        name: "Github",
        message: "What is your Github username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?",
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'Please enter project dependencies or other installation required...',
        default: 'npm i'
       },
       {
        type: 'input',
        name: 'Usage',
        message: 'Please enter a usage for this project...',
       },
       {
        type: 'input',
        name: 'Contribution',
        message: 'Please enter who the contributors are for this project...', 
       },
       {
        type: 'input',
        name: 'Tests',
        message: 'Please enter project tests, if any...',
         default: 'npm test'
       },
       {
        type: 'input',
        name: 'Questions',
        message: 'Please enter any project questions...',
       },
];

inquirer.prompt(questions).then((data) => {
    const { title, description, license, Github, email, Installation, Usage, Contribution, Tests, Questions } = data;

  
const readme = `
# ${title}

## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Tests](#tests)
- [Github](#github)
- [Email](#email)

## Description

${description}

## Installation

${Installation}

## Email

${email}

## GitHub

${Github}

## Usage

${Usage}

## License

${license}

`
fs.appendFile("./newReadme/README.md", readme, (error) => 
console.log(error ? "Error in your file" : "File created")); 
});