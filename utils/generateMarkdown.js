
function setLicenseBadge(license) {
  if (license === 'None') {
    return ""
  } else {
    return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`
  }
}

// function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}

  ${setLicenseBadge(answers.license)}

  ## Description 
  
  ${answers.description}

  - [Deployed application](${answers.deployment})
  
  - [Application repo](${answers.repo})

  ## Table of Contents: 
  - [Description](#Description)
  - [Installation Instructions](#Installation)
  - [Usage Information](#Usage) 
  - [Contributing Guidelines](#Contributing)
  - [Test Instructions](#Test) 
  - [Questions & Contact Info](#Questions)
  - [License](#License)

  ## Installation
  
  ${answers.installation}

  ## Usage 
  
  ${answers.usage}

  ## Test
  
  N/A

  ## Contributing
  
  ${answers.contribution}

  ## Questions 

  If you have any further questions, please don't hesitate to contact me:
  
  - [GitHub](https://www.github.com/${answers.github})
  
  - [Email me](mailto:${answers.email})

  ## License
  
  ${answers.license}`

;
}




module.exports = generateMarkdown;




