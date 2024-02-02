// function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}

  ## Description 
  ${answers.description}

  ## Table of Contents: 
  - [Description](#Description)
  - [Installation Instructions](#Installation Instructions)
  - [Usage Information](#Usage Information) 
  - [Contributing Guidelines](#Contributing)
  - [Test Instructions](#Test and Deploy) 
  - [Questions & Contact Info](#Questions)
  - [License](#License)

  ## Installation Instructions 
  ${answers.installation}

  ## Usage Information 
  ${answers.usage}


  ## Test and Deploy
  N/A

  ## Contributing
  ${answers.contributing}

  ## Questions 

  If you have any further questions, please don't hesitate to contact me:
  - [GitHub](https://www.github.com/${answers.github})
  - [Email me](mailto:${answers.email})

  ## License
  ${answers.license}`

;
}

module.exports = generateMarkdown;

