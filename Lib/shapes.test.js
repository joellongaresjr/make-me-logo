const { Triangle, Circle, Square } = require("./shapes.js");

describe("Test Triangle", () => {
  test("testing triangle with a orange background with text color of purple", () => {
    const color = "orange"
    const text = "BOY"
    const textColor = "purple"

    const shape = new Triangle(color, textColor, text);
    
    expect(shape.render()).toEqual(
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <polygon points="150,18 244,182 56,182" fill="orange" />
  <text x="150" y="120" font-size="80" text-anchor="middle" fill="purple">BOY</text>
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
  <text x="150" y="115" font-size="80" text-anchor="middle" fill="green">MOM</text>
  </svg>`
    );
  });
});

describe("Test Square", () => {
    test("testing square with a purple background with text color of blue", () => {
      const color = "purple"
      const text = "DAD"
      const textColor = "blue"

      const shape = new Square(color, textColor, text);

      expect(shape.render()).toEqual(
          `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="73" y="40" width="160" height="160" fill="purple" />
    <text x="150" y="120" font-size="80" text-anchor="middle" fill="blue">DAD</text>
    </svg>`
      );
    });
  });