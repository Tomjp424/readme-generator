// TODO: Include packages needed for this application
import fs from "fs";
import inquirer from "inquirer";
import generateMarkdown from "./utils/generateMarkdown.js";

// TODO: Create an array of questions for user input
const questions = [
    "Please enter your full name",
    "Please enter your GitHub username",
    "Please provide a link to your GitHub profile",
    "Please enter your email",
    "What is the title of your project?",
    "Provide a short description of your project's function.",
    "Please provide a step-by-step guide on installing your project.",
    "Please provide instructions on how to use your project, including images if necessary.",
    "Please specify guidelines for others to contribute to your project",
    "Please provide instructions for proper testing of your application",
    "What type of license does your project use?",
];

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) =>
    error ? console.log(error) : console.log("README generated successfully!"))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt([
        {
            name: "fullName",
            type: "input",
            message: questions[0],  // "Please enter your full name"
        },
        {
            name: "gitUsername",
            type: "input",
            message: questions[1],  // "Please enter your GitHub username"
        },
        {
            name: "gitLink",
            type: "input",
            message: questions[2],  // "Please provide a link to your GitHub profile"
        },
        {
            name: "email",
            type: "input",
            message: questions[3],  // "Please enter your email"
        },
        {
            name: "title",
            type: "input",
            message: questions[4],  // "What is the title of your project?"
        },
        {
            name: "description",
            type: "input",
            message: questions[5],  // "Provide a short description of your project's function."
        },
        {
            name: "installGuide",
            type: "input",
            message: questions[6],  // "Please provide a step-by-step guide on installing your project."
        },
        {
            name: "usageGuide",
            type: "input",
            message: questions[7],  // "Please provide instructions on how to use your project, including images if necessary."
        },
        {
            name: "contributionGuide",
            type: "input",
            message: questions[8],  // "Please specify guidelines for others to contribute to your project"
        },
        {
            name: "testGuide",
            type: "input",
            message: questions[9],  // "Please provide instructions for proper testing of your application"
        },
        {
            name: "license",
            type: "list",
            message: questions[10],  // "What type of license does your project use?"
            choices: ["MIT", "Creative Commons Zero", "Apache 2.0", "Mozilla Public License 2.0", "No License"]
        },
    ]) .then ((responses) => {
        const licenseChoice = responses.license !== "No License" ? responses.license : "";
        const compiledMarkdown = generateMarkdown(responses, licenseChoice);
        writeToFile("YourREADME.md", compiledMarkdown);
    })
}

// Function call to initialize app
init();