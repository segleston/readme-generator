const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const util = require('util');
const generateMarkdown = require("./utils/generateMarkdown");
const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () =>
  inquirer.prompt([
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
        type: 'list',
        name: 'license',
        message: "What license would you like for your project?",
        choices:  ['MIT','GPLv2','LGPLv3', 'None']
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
]);
// // array of questions for user
// const questions = [
// ];

    promptUser() 
    .then((answers) => writeFileAsync('output/README.md', generateMarkdown(answers)))
    .then(() => console.log('Successfully wrote to readME'))
    .catch((err) => console.error(err));

// // function to write README file
// function writeToFile(fileName, data) {
    
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();


// // output/readme.md