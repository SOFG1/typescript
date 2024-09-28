//Example 1
interface Animal {
  live(): void;
}
interface Dog extends Animal {
  woof(): void;
}

type Example1 = Dog extends Animal ? number : string;

//Example 2
type IdLabel = {
  id: number;
  type: "user" | "post";
};

type NameLabel = {
  name: string;
  surname: string;
  age: number;
};

type NameOrId<T extends number | string> = T extends number
  ? IdLabel
  : NameLabel;

function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
  throw "unimplemented"; //Some implementation
}

let a = createLabel("typescript");

let b = createLabel(2.8);
