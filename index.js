const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const util = require('util');
const generateMarkdown = require("./utils/generateMarkdown");
const writeFileAsync = util.promisify(fs.writeFile);

//  array of objects of questions for user input
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
        message: "Please enter the usage information:"
    },
    {
        type: 'input',
        name: 'contribution',
        message: "What are the contribution guidelines:"
    },
    {
        type: 'list',
        name: 'license',
        message: "Please choose a license for your project:",
        choices:  ['MIT','GPLv2','LGPLv3', 'None']
    },
    {
        type: 'input',
        name: 'github',
        message: "Please enter your GitHub username:"
    },
    {
        type: 'input',
        name: 'email',
        message: "Please enter your email address:"
    }
]);


    promptUser() 
    .then((answers) => writeFileAsync('README.md', generateMarkdown(answers)))
    .then(() => console.log('Successfully created README'))
    .catch((err) => console.error(err));