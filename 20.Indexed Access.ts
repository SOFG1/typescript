type Person = { age: number; name: string; alive: boolean };

type Age = Person["age"];
type I1 = Person["age" | "name"];
type I2 = Person[keyof Person];

type MessageOf<T extends { message: unknown }> = T["message"];

let msg: MessageOf<{ message: 1231 }> = 1231;
