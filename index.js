const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What is your project title?"
    },
    {
        type: 'input',
        name: 'description',
        message: "Please enter a description of your application:"
    },
    {
        type: 'input',
        name: 'installation',
        message: "Please enter the installation instructions:"
    },
    {
        type: 'input',
        name: 'usage',
        message: "Please enter the usage information?"
    },
    {
        type: 'input',
        name: 'contribution',
        message: "What are the contribution guidelines?"
    },
    {
        type: 'input',
        name: 'test',
        message: "What are the test instructions?"
    },
    {
        type: 'input',
        name: 'license',
        message: "What is your project title?"
    },

];

// function to write README file
function writeToFile(fileName, data) {
    `# UK-VIRT-FE-PT-11-2023-U-LOLC
    // Project title
    ## Description 
    ## Table of Contents: //Links linking to the different areas in the readme
    ## Installation
## Usage
//List of options - adds badge to top and details underneath
## License
## Test and Deploy
## Contributing
## Questions //ask user for github username, then link to github goes here. Also email address with mailto link`

}

// function to initialize program
function init() {

}

// function call to initialize program
init();
