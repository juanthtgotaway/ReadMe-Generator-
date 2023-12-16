// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}
##Description
${data.Description}
##Table of Contents
*[Features](#Descriptions)
*[Installation](#Installation)
*[Usage](#Usage)
*[Credits](#Credits)
##Installation
${data.Installation}
##Usage
${data.Usage}
##Credits
${data.Credits}
##License
${data.License}
##Questions
If you have any questons or concerns feel free to reach out via the following:
${data.Username}
${data.Email}

`;
}

module.exports = generateMarkdown;
