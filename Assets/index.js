const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown");
const shape = require("./shapes");
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
function writeToFile(fileName, data) {
  try {
      //console.log(process.cwd())
      fs.writeFileSync(process.cwd() +`/Develop/${fileName}`, data);
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
   writeToFile('README.md',fileData)
  }
);
}

init();

