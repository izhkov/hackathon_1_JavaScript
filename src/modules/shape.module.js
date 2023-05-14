import { Module } from "../core/module";

export class ShapeModule extends Module {
  constructor(type, text) {
    super(type, text);
    this.shapeContainer = document.createElement("div");
    this.shapeContainer.className = "shape";
  }

  createShape() {
    const shapeType = Math.random() < 0.5 ? "circle" : "square";

    const size = Math.floor(Math.random() * 100) + 50;

    const x = Math.floor(Math.random() * (window.innerWidth - size)) + size / 2;
    const y =
      Math.floor(Math.random() * (window.innerHeight - size)) + size / 2;

    const shape = document.createElement("div");

    if (shapeType === "circle") {
      shape.style.width = size + "px";
      shape.style.height = size + "px";
      shape.style.borderRadius = "50%";
    } else {
      shape.style.width = size + "px";
      shape.style.height = size + "px";
    }
    const randomColor = `rgb(
      ${Math.floor(Math.random() * 256)},
     ${Math.floor(Math.random() * 256)},
    ${Math.floor(Math.random() * 256)}
    )`;

    shape.style.position = "absolute";
    shape.style.left = x + "px";
    shape.style.top = y + "px";
    shape.style.backgroundColor = randomColor;

    return shape;
  }

  render() {
    this.shapeContainer.appendChild(this.createShape());
    return this.shapeContainer;
  }

  trigger() {
    const shapeBlockHTML = this.render();
    document.body.append(shapeBlockHTML);
  }
}
