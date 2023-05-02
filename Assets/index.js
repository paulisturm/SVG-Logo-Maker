const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown");
const shapes = require("./shapes");
const { error } = require("console");
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
        choices: ["Circle", "Triangle", "Square"],
        name: "shape",
      },
      {
        type: "input",
        message: "Enter the color you wish to use for your text",
        name: "shapeColor",
      },
]
// .then((answer) => {
//   if (answers.text.length > 3) {
    
//   }
// })
// shape selection
if (fileData.shape === Circle) {
  //put in a circle
} else if (fileData.shape === Triangle) {
  //put in a triangle
} else {
  //put in a square
}
function writeToFile(fileName, data) {
  try {
      //console.log(process.cwd())
      fs.writeFileSync("logo.svg", data);
      // file written successfully
    } catch (err) {
      console.error(err);
    }
}


function init() {
  inquirer
  .prompt(questions)

  .then((response) => {
  
   
   var fileData = generateMarkdown(response)
   console.log(fileData)
   writeToFile('SVG',fileData)
  }
);
}

init();

