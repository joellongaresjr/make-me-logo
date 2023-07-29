class Shape {
  constructor(color, textColor, text) {
    this.color = color;
    this.textColor = textColor;
    this.text = text;
  }
}

class Triangle extends Shape {
  constructor(color, textColor, text) {
    super(color, textColor, text);
  }
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <polygon points="150,18 244,182 56,182" fill="${this.color}" />
  <text x="150" y="170" font-size="80" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
  </svg>`;
  }
}

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

module.exports = { Triangle, Circle, Square };
