class Shape {
  constructor(color, textColor, text) {
    this.color = color;
    this.textColor = textColor;
    this.text = text;
  }
  setColor(colorVar) {
    this.color = colorVar;
  }
}

class Triangle extends Shape {
  constructor(color, textColor, text) {
    super(color, textColor, text);
    this.shape = "Triangle";
  }
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />
    <text x="150" y="120" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
  }
}

class Circle extends Shape {
  constructor(color, textColor, text) {
    super(color, textColor, text);
    this.shape = "Circle";
  }
  render() {
    return `<circle cx="150" cy="115" r="80" fill="${this.color}" />
    <text x="150" y="120" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
  }
}

class Square extends Shape {
  constructor(color, textColor, text) {
    super(color, textColor, text);
    this.shape = "Square";
  }
  render() {
    return `<rect x="73" y="40" width="160" height="160" fill="${this.color}" />
    <text x="150" y="120" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
  }
}

module.exports = { Triangle, Circle, Square };
