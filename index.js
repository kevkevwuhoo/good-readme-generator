require("dotenv").config();
// need inquirer for user input
var inquirer = require("inquirer");
var fs = require("fs");
var api = require("./utils/api");
var generateMarkdown = require("./utils/generateMarkdown");

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
        name: "needToKnow",
    },
    {
        type: "input",
        message: "What does the user need to know about contributing to this repo?",
        name: "contributing",
    },
];

// expected output from github api
// github picture and email

function writeToFile(fileName, data) {
    // generateMarkdown
    fs.appendFile(fileName, data, (err) => console.log(err));
}

function init() {
    // ask the user questions
    // get user input
    inquirer
        .prompt(questions)
        .then((response) => {
            // console.log(response.data);
            const readMeData = { ...response };
            api.getUser(response.username).then((res) => {
                const { email, avatar_url } = res.data;
                console.log(res.data);
                const newReadMeData = { ...readMeData, email: email, image: avatar_url };
                // console.log(newReadMeData);
            });
        })
        .catch((err) => console.log(err));
}

init();
