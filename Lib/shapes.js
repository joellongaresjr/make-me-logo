// Class Shape represents all the shapes with constructor parameters of (color, textColor,text)
class Shape {
  constructor(color, textColor, text) {
    this.color = color;
    this.textColor = textColor;
    this.text = text;
  }
}

// Class representing Triangle
class Triangle extends Shape {
  constructor(color, textColor, text) {
    super(color, textColor, text);
  }
// rendering svg with the properties of the constructor parameters (color, textColor, text) 
//btw this was so annoying having to adjust the x"#"" for each given shape to make sure that the text and shape were aligned properly. a lot of trial & error, and "a lot" is an understatement lol
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <polygon points="150,18 244,182 56,182" fill="${this.color}" />
  <text x="150" y="170" font-size="80" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
  </svg>`;
  }
}

// Class representing Circle
class Circle extends Shape {
  constructor(color, textColor, text) {
    super(color, textColor, text);
  }
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <circle cx="150" cy="100" r="80" fill="${this.color}" />
  <text x="150" y="125" font-size="80" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
  </svg>`;
  }
}

// Class representing Square
class Square extends Shape {
  constructor(color, textColor, text) {
    super(color, textColor, text)
  }
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect x="70" y="0" width="200" height="200" fill="${this.color}" />
  <text x="165" y="135" font-size="80" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
  </svg>`;
  }
}

// exports object (triangle, circle, square)
module.exports = { Triangle, Circle, Square };
