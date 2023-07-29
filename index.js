const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Circle, Square } = require("./Lib/shapes.js");

// validating 'logoText' input from user to assure that input length is not equal to three
const logoTextValidation = (input) => {
  if (input.length !== 3) {
    console.log("Please provide values of a total of 3");
    return false;
  } else {
    return true;
  }
};

// validating color input for (logoTextColor, logoColor)
const colorValidation = (input) => {
  const colorStrings = [
    "red",
    "green",
    "blue",
    "yellow",
    "orange",
    "purple",
    "pink",
    "brown",
    "black",
    "white",
  ];
// checking if the input matches any of the predefined color strings 
  if (colorStrings.includes(input.toLowerCase())) {
    return true;
  }
// check if the input matches a valid hexadecimal code
  if (/^#[A-Fa-f0-9]{6}|[A-Fa-f0-9]{3}$/.test(input)) {
    return true;
  }

  return "Must be a valid color string or hex code";
};

// Prompting the questions that we offer for the user. 
//We initialize our validation functions first in order for the prompt to determine if it meets the specficied crtieria in this case "logoText, and call colors strings"
const questions = [
  {
    type: "input",
    name: "logoText",
    message: "Please enter 3 letters for your logo?",
    validate: logoTextValidation,
  },
  {
    type: "input",
    name: "logoTextColor",
    message: "What color would you like your text to be?",
    validate: colorValidation,
  },
  {
    type: "list",
    name: "logoShape",
    message: "Please select a Shape!",
    choices: ["Triangle", "Square", "Circle"],
  },
  {
    type: "input",
    name: "logoColor",
    message: "Please provide a color for your logo",
    validate: colorValidation,
  },
];

// Define the 'createLogo' function to generate the logo based on user's answers
function createLogo(answers) {
  const logoTextColor = answers.logoTextColor;
  const logoColor = answers.logoColor;
  const logoText = answers.logoText;

// apply switch statment with the users selected 'logoShape' 
  switch (answers.logoShape) {
// selecting each shape as new Instance from the 'lib - shapes.js' with the properties of 'logoTextColor,logoColor,logoText' and rendering the svg properties of the logo that was inputted from the user
    case "Triangle":
      return new Triangle(logoColor, logoTextColor, logoText).render();
      break;
    case "Square":
      return new Square(logoColor, logoTextColor, logoText).render();
      break;
    case "Circle":
      return new Circle(logoColor, logoTextColor, logoText).render();
      break;
    default:
      return null;
  }
}

// Overall function to write the SVG representation of the logo to an SVG file
const generateSVG = async (logo) => {
  fs.writeFile("logo.svg", logo, (err) => 
  {
    if (err) {
      console.log(err)
    }
    console.log("Generated logo.svg");
  });
}
//function will start the logo generation process.
const init = async () => {
// demonstrating that once the user provides their input, we store their answers in the 'answers' object
//'creatingLogo' based on the 'answers/input' we collected from our user!
  const answers = await inquirer.prompt(questions);
  const logo = await createLogo(answers);
// thus calling our 'generateSVG' function to write a logo based on the answers given and naming it "logo.svg"
  generateSVG(logo);

};


init();
