export interface Circle {
  kind: "circle";
  radius: number;
}

export interface Square {
  kind: "square";
  sideLength: number;
}

interface Triangle {
  kind: "triangle";
  sideLength: number;
}

type Shape = Circle | Square;
//Exhaustive check will throw an error if we add Triangle to this type
//type Shape = Circle | Square | Triangle;

function getArea(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  }
  if (shape.kind === "square") {
    return shape.sideLength ** 2;
  }
  const _exhaustiveCheck: never = shape;
  return _exhaustiveCheck;
}
