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
  const { logoText, logoTextColor, logoShape, logoColor } = answers;

  let shape;
  switch (logoShape) {
    case "Triangle":
      shape = new Triangle(logoTextColor, logoColor, logoText);
      break;
    case "Square":
      shape = new Square(logoTextColor, logoColor, logoText);
      break;
    case "Circle":
      shape = new Circle(logoTextColor, logoColor, logoText);
      break;
    default:
      console.log("Invalid shape choice");
      return null;
  }

  shape.setColor(logoColor);

  const logo = {
    text: logoText,
    textColor: logoTextColor,
    shape: shape,
  };

  return logo;
}

function generateSVG(logo) {
  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        ${logo.shape.render(logo)}
    </svg>`;

  fs.writeFileSync("logo.svg", svgContent);

  console.log("Generated logo.svg");
}

function init() {
  inquirer.prompt(questions).then((answers) => {
    const logo = createLogo(answers);
    if (logo) {
      generateSVG(logo);
    }
  });
}

init();
