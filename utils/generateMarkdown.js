// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(License) {
  if(License !== "None") {
    return `![Github license](https://shields.io/badge/license-${License}-orange)`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}
${renderLicenseBadge(data.License)}
##Description
${data.Description}
##Table of Contents
[Descriptions](#Descriptions)
[Installation](#Installation)
[Usage](#Usage)
[Credits](#Credits)
[Tests](#Tests)
[License](#License)
[Questions](##Questions)
##Installation
${data.Installation}
##Usage
${data.Usage}
##Credits
${data.Credits}
##Tests
${data.Tests}
##License
${data.License}
##Questions
If you have any questions or concerns feel free to reach out via the following:
${data.Username}
${data.Email}

`;
}

module.exports = generateMarkdown;
