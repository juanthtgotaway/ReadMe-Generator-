// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require ('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "Title",
        message: "What is the name of this project?",
    },
    {
        type: "input", 
        name: "Description",
        message: "Write a brief description of what this project is about.",
    },
    {
        type: "input",
        name: "Installation",
        message: "What are the step by step instructions required to install your project?",
    },
    {
        type: "input", 
        name: "Usage",
        message: "What can this project be used for?",
    },
    {
        type: "input",
        name: "Credits",
        message: "Are there any collaborators? What about any third-party assets, or even tutorials that were followed to get end result? N/A if not applicable.",
    },
    {
        type: "input",
        name: "Tests",
        message: "Write tests for your application and provide examples on how to run them here (if applicable if not input N/A):",
    },
    {
        type: "list",
        name: "License",
        message: "What license is being used?",
        choices: ["MIT", "GPLv2", "Apache", "GPLv3", "BSD 3-clause", "None"],
    },
    {
        type: "input",
        name: "Username",
        message: "Enter your GIT Hub username"
    },
    {
        type: "input",
        name: "Email",
        message: "What is your email address?"
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Generating your README File");
        writeToFile("./completed/README.md", generateMarkdown(responses));
    });
}

// Function call to initialize app
init()
