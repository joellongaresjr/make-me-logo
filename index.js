const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Circle, Square } = require("./Lib/shapes.js");

const logoTextValidation = (input) => {
  if (input.length !== 3) {
    console.log("Please provide values of a total of 3");
    return false;
  } else {
    return true;
  }
};

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
  if (colorStrings.includes(input.toLowerCase())) {
    return true;
  }

  if (/^#[A-Fa-f0-9]{6}|[A-Fa-f0-9]{3}$/.test(input)) {
    return true;
  }

  return "Must be a valid color string or hex code";
};

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

function createLogo(answers) {
  const logoTextColor = answers.logoTextColor;
  const logoColor = answers.logoColor;
  const logoText = answers.logoText;

  switch (answers.logoShape) {
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

const generateSVG = async (logo) => {
  console.log(logo);

  fs.writeFile("logo.svg", logo, (err) => 
  {
    if (err) {
      console.log(err)
    }
    console.log("Generated logo.svg");
  });
}

const init = async () => {
  const answers = await inquirer.prompt(questions);
  console.log(answers);
  const logo = await createLogo(answers);
  generateSVG(logo);

};



// function init() {
//   inquirer.prompt(questions).then((answers) => {
//     const logo = createLogo(answers);
//     if (logo) {
//       generateSVG(logo);
//     }
//   });
// }

init();
