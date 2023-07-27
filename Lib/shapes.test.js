const { Triangle, Circle, Square } = require("./shapes.js");

describe("Test Triangle", () => {
  test("testing triangle with a orange background", () => {
    const shape = new Triangle();
    shape.setColor("orange");
    expect(shape.render()).toEqual(
      '<polygon points="150, 20 260, 180 50, 180" fill="orange" />'
    );
  });
});

describe("Test Circle", () => {
  test("testing circle with a red background", () => {
    const shape = new Circle();
    shape.setColor("#red");
    expect(shape.render()).toEqual(
      '<circle cx="50" cy="50" r="50" fill="red" />'
    );
  });
});

describe("Test Square", () => {
    test("testing square with a purple background", () => {
      const shape = new Square();
      shape.setColor("purple");
      expect(shape.render()).toEqual(
        '<rect x="50" y="20" width="120" height="120" fill="purple" />'
      );
    });
  });