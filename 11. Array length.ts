const tuple = [5, 10]; //This is a number[] inferred
const tuple2: [number, number] = [3, 10];

function getAngle(arr: [number, number]): number {
  return Math.atan2(...arr);
}

//@ts-expect-error
getAngle(tuple); // We have an error here because number[] is not a tuple

getAngle(tuple2); //tuple2's type is [number, number]
