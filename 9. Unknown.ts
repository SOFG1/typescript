//Example 1
function f1(a: any) {
  a.test(); //Test can be undefined and lead to a bug
}

//This is the correct implementation
function f2(b: unknown) {
  if (
    b &&
    typeof b === "object" &&
    "test" in b &&
    typeof b.test === "function"
  ) {
    b.test();
  }
}

//Example 2
function parse(str: string): unknown {
  return JSON.parse(str);
}
