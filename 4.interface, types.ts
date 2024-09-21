//Difference between interfaces and types

//interface
interface Person {
  name: string;
}

interface Person {
  age: number;
}

interface Developer extends Person {
  language: string;
}

//type
type Human = {
  name: string;
};

type Employee = Human & {
  //Extendable only this way
  age: number;
};

// type Employee = {
//   Not extendable throws an error
// };
