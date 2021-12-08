import { buildFrequencyCounter } from "../frequencyCounter/validAnagram";

function areThereDuplicates(...array: any[]): boolean {
  // array: [1, 2, 3]
  let i = 0;

  for (let j = 1; j < array.length; j++) {
    if (array[i] === array[j]) {
      return true;
    } else {
      i = j;
    }
  }

  return false;
}

console.log("areThereDuplicates (with multiple pointers)");
console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c")); // false
console.log(areThereDuplicates("a", "b", "b")); // true

function areThereDuplicates_frequencyCounter(...array: any[]): boolean {
  // example: array = [1, 2, 2, 3]

  // create a frequency counter for the array
  const frequencyCounter = buildFrequencyCounter(array);
  // loop over the array
  for (const element of array) {
    // return true if one value > 1
    if (frequencyCounter[element] > 1) {
      return true;
    }
  }
  // false otherwise
  return false;
}

console.log("areThereDuplicates_frequencyCounter");
console.log(areThereDuplicates_frequencyCounter(1, 2, 3)); // false
console.log(areThereDuplicates_frequencyCounter(1, 2, 2)); // true
console.log(areThereDuplicates_frequencyCounter("a", "b", "c")); // false
console.log(areThereDuplicates_frequencyCounter("a", "b", "b")); // true
