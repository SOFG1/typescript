//Array
type StringArray = string[];
type StringArray2 = Array<string>;

//Readonly array
type MyReadonlyArray2 = readonly number[];
type MyReadonlyArray = ReadonlyArray<number>;

//Tuples
type StringNumberPair = [string, number]; //number of elements is fixed

//Optional values in tuple
type Either2dOr3d = [number, number, number?];

//Rest operator in tuple
type StringNumberBooleans = [string, number, ...boolean[]];

//Readonly tuple
const pair: readonly [string, number] = ["123", 123];
