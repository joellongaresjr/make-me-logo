const { Triangle, Circle, Square } = require("./shapes.js");

// overall each describe block for testing each shape in this case 'Triangle' and we apply for each shape(Traingle, Circle, and Square)
describe("Test Triangle", () => {
  test("testing triangle with a orange background with text color of purple", () => {
    const color = "orange"
    const text = "BOY"
    const textColor = "purple"

// creating a new instance of the each shape in this case Triangle with the define properties of (color, textColor, text)
    const shape = new Triangle(color, textColor, text);

// expecting that each shape has the SVG representation that is rendered to match the expected output 
    expect(shape.render()).toEqual(
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <polygon points="150,18 244,182 56,182" fill="orange" />
  <text x="150" y="170" font-size="80" text-anchor="middle" fill="purple">BOY</text>
  </svg>`
    );
  });
});

describe("Test Circle", () => {
  test("testing circle with a red background with text color of green", () => {
    const color = "red"
    const text = "MOM"
    const textColor = "green"

    const shape = new Circle(color, textColor, text);

    expect(shape.render()).toEqual(
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <circle cx="150" cy="100" r="80" fill="red" />
  <text x="150" y="125" font-size="80" text-anchor="middle" fill="green">MOM</text>
  </svg>`
    );
  });
});

describe("Test Square", () => {
    test("testing square with a purple background", () => {
      const color = "purple"
      const text= "DAD"
      const textColor = "blue"

      const shape = new Square(color, textColor, text);

      expect(shape.render()).toEqual(
          `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect x="70" y="0" width="200" height="200" fill="purple" />
  <text x="165" y="135" font-size="80" text-anchor="middle" fill="blue">DAD</text>
  </svg>`
      );
    });
  });