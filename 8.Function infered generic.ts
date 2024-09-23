//Infered generic
function copy<T>(input: T[]): T[] {
  // return input.map((v) => Number(v)); throws error
  return [...input, ...input];
}

const val = copy([1, 2, 3, 4, 5, 6]);
const val2 = copy(["123", "wqdwqdwq", "21321321", "wqdqwd"]);
const val3 = copy([1, "213", "123", 123123]);

//Extended
function lengthSum<T extends { length: number }>(a: T, b: T): number {
  return a.length + b.length;
}

lengthSum([2, 3, 4], [1, 2, 3, 4]);
lengthSum("1232131", "123321");

//Example
function findAndUpdateById<T extends { id: unknown }>(item: T, list: T[]) {
  const index = list.findIndex((i) => i.id === item.id);
  list[index] = item;
}

//Example my 'forEach'
function myForEach(
  arr: any[],
  callback: (item: any, index: number) => unknown
) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i);
  }
}

myForEach([1, 2, 3, 4], (item, i) => {
  console.log(item, i.toString());
  return 213;
});
