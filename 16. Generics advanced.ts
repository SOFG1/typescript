//Generic default
type Container<T, U> = {
  element: T;
  children: U;
};

declare function create<
  T extends HTMLElement = HTMLDivElement,
  U extends HTMLElement[] = T[]
>(element: T, child: U): Container<T, U>;
create(document.createElement("div"), [document.createElement("section")]);

//
//
//

//Using type in generic
function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key];
}

//
//
//

//Function interface with generic
interface Identity<T> {
  (arg: T): T;
}
const identity: Identity<number> = function (param) {
  return param;
};
identity(123123);
