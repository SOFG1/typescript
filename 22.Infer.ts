// Infer must to be used inside 'extends' part in conditional types
// as in the examples below
//
//
//

//Return array's element type if is array, if not it's type
type Flatten2<Type> = Type extends Array<infer T> ? T : Type;

type Str2 = Flatten2<string[]>;
type Num2 = Flatten2<number>;

//
//
//

//GetReturnType with infer
type GetReturnType<Type> = Type extends (...args: never[]) => infer Return
  ? Return
  : never;

//
//
//

//Tuple with infer
type GetTupleFirst<T> = T extends [infer First, ...any[]] ? First : never;

type First = GetTupleFirst<[1, 2]>;
