//Example 1
interface Animal {
  live(): void;
}
interface Dog extends Animal {
  woof(): void;
}

type Example1 = Dog extends Animal ? number : string;

///
///
///
///
///

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

///
///
///
///
///

//Extract message from an object
type MessageOf<T> = T extends { message: unknown } ? T["message"] : never;

///
///
///
///
///

//Flaten
type Flatten<T> = T extends unknown[] ? T[number] : T;
type Str = Flatten<string[]>;
type Num = Flatten<number>;
