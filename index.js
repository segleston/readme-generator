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
        type: 'list',
        name: 'license',
        message: "What is your project title?",
        choices:  ['MIT','GPLv2','LGPLv3']
    },
    {
        type: 'input',
        name: 'github',
        message: "What is your GitHub username?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your email address?"
    }
];

// function to write README file
function writeToFile(fileName, data) {
    `# ${data.title}
    ## Description 

    ## Table of Contents: //Links linking to the different areas in the readme
    - [Description](#Description)
    - [Installation Instructions](#Installation Instructions)
    - [Usage Information](#Usage Information) 
    - [Contributing Guidelines](#Contributing)
    - [Test Instructions](#Test and Deploy) 
    - [Questions & Contact Info](#Questions)
    - [License](#License)

## Installation Instructions 

## Usage Information 
//List of options - adds badge to top and details underneath

## Test and Deploy

## Contributing

## Questions 

- [GitHub](https://www.github.com/${data.github})
- If you have any further questions, please don't hesitate to [email me](mailto:${data.email})

## License`

`[Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/)`
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
