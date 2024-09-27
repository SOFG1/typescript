type Arrayish = { [n: number]: unknown };
type A = keyof Arrayish;

type Mapish = { [key: string]: boolean };
type M = keyof Mapish;
