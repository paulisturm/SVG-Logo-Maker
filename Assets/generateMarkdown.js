console.log("hello")
function generateMarkdown(data) {
    return `# ${data.text}
    ${data.textColor}
    ${data.shape}
    ${data.shapeColor}
  `;
  }
module.exports = generateMarkdown;