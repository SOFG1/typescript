type ToArray<Type> = Type extends any ? Type[] : never;
type StrArrOrNumArr = ToArray<string | number>; //string[] | number[]

//Non Distributive
type ToArrayNonDist<Type> = [Type] extends [any] ? Type[] : never;

type ArrOfStrOrNum = ToArrayNonDist<string | number>; // (string | number)[]
