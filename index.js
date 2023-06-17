const fs = require("fs");
const inquirer = require("inquirer");
const {circle,triangle,square} = require("./lib/shapes");

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
        type: "list",
        message: "Choose a Shape: Circle, Triangle, or Square",
        choices: ["circle", "triangle", "square"],
        name: "shapeType",
      },
      {
        type: "input",
        message: "Enter the color you wish to use for your shape",
        name: "shapeColor",
      },
]


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

  .then(({text, textColor, shapeType, shapeColor}) => {
    console.log(textColor);
    let shape
  //TODO check shape type use shape type to abstantiate shape
  // if (shapeType === "Circle") {
  //   //put in a circle
  //   let mycircle = new circle()
  // } else if (shapeType === "Triangle") {
  //   //put in a triangle
  //   let mytriangle = new triangle()
  // } else {
  //   let mysquare = new square()
  // }
  switch (shapeType) {
    case "circle":
      shape = new circle()
      break
    case "square":
      shape = new square()
      break
    default:
      shape = new triangle()
      break
  }
  shape.setColor(shapeColor) 
  //TODO create SVG Object with Shape 
  let mysvg = new svg() 
  mysvg.setText(text, textColor)
  mysvg.setshape(shape, shapeColor)
//Render SVG
  //  console.log(response)
  //  var fileData = (response)
  //  console.log(fileData)
   writeToFile('logo.svg',mysvg.render())
  }
);
}

init();

