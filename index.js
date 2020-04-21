// need inquirer for user input
var inquirer = require("inquirer");

// questions:
// what is your github username?
// input: username
// what is your project's name?
// input: project-name
// Write a short description of your project
// input: description
// What license does your project have?
// input: license
// What is the command to install dependencies?
// input: installation
// What is the command to run tests?
// input: test
// What does the user need to know about using this repo?
// input: repo
// What does the user need to know about contributing to this repo?
// input: contributing

const questions = [
    {
        type: "input",
        message: "Github username?",
        name: "username",
    },
    {
        type: "input",
        message: "Project name?",
        name: "project",
    },
    {
        type: "input",
        message: "Write a short description of your project",
        name: "description",
    },
    {
        type: "input",
        message: "Licenses?",
        name: "license",
    },
    {
        type: "input",
        message: "Installation command?",
        name: "installation",
    },
    {
        type: "input",
        message: "Test command?",
        name: "test",
    },
    {
        type: "input",
        message: "What does the user need to know about using this repo?",
        name: "need-to-know",
    },
    {
        type: "input",
        message: "What does the user need to know about contributing to this repo?",
        name: "contributing",
    },
];

inquirer.prompt(questions).then(function (response) {
    if (response.confirm === response.password) {
        console.log("Success!");
    } else {
        console.log("You forgot your password already?!");
    }
});

// expected output from github api
// github picture and email

function writeToFile(fileName, data) {
    // At least one badge
    // Project title
    // Description
    // Table of Contents
    // Installation
    // Usage
    // credits
    // License
    // badges
    // Contributing
    // Tests
    // Questions
    // User GitHub profile picture
    // User GitHub email
}

function init() {}

init();
