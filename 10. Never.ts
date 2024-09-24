//Never type
//this function will never return a value
function error(err: string): never {
  throw new Error(err);
}
