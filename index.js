const inquirer = require("inquirer");
const fs = require("fs");


const questions = [
    {
        type: "input",
        name: "logoText",
        message: "What 3 text would you like for your logo?",
        validate: logoTextValidation
         
    },
    {
        type: "input"
        name: "logoTextColor",
        message: "What color would you like your text to be?",
        validate: colorValidation
    },
    {
        type: "list"
        name: "logoShape"
        message: "Please select a Shape!"
        choices: ["Triangle", "Square", "Circle"],
    }
    {
        type: "input",
        name: "logoColor",
        message: "Please provide a color for your logo",
        validate: colorValidation
    },
];

