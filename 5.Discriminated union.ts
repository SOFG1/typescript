//Incorrect usage
interface Shape {
  kind: "circle" | "square";
  radius?: number;
  sideLength?: number;
}

//Correct
interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLength: number;
}

type Shape2 = Circle | Square;

function getArea(shape: Shape2) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  }
  if (shape.kind === "square") {
    return shape.sideLength ** 2;
  }
}
