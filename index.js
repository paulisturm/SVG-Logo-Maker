const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown");
const {circle,triangle,square} = require("./lib/shapes");
const { error } = require("console");
const svg = require("./lib/svg")
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
  //TODO check shape type use shape type to abstantiate shape
  if (response.shape === "Circle") {
    //put in a circle
    let mycircle = new circle()
  } else if (response.shape === "Triangle") {
    //put in a triangle
    let mytriangle = new triangle()
  } else {
    let mysquare = new square()
  }
  //TODO create SVG Object with Shape 
  let mysvg = new svg() 
//Render SVG
   console.log(response)
   var fileData = generateMarkdown(response)
   console.log(fileData)
   writeToFile('SVG',fileData)
  }
);
}

init();

