const fs = require("fs");
const inquirer = require("inquirer");

//array of questions
const questions = [
    {
        type: "input",
        message: "Enter the text you wish to use up to three characters",
        name: "text",
      },
      {
        type: "input",
        message: "Enter the color you wish to use for your text",
        name: "textColor",
      },
      {
        type: "input",
        message: "Choose a Shape: Circle, Triangle, or Square",
        name: "shape",
      },
      {
        type: "input",
        message: "Enter the color you wish to use for your text",
        name: "shapeColor",
      },
]