function countUniqueValues(array: number[]): number {
  if (!array.length) return 0;

  //  a counter and 2 pointers at the start of the array
  let uniqueCounter = 1;
  let i = 0;

  // use i as base index and move j to count unique values
  for (let j = 1; j < array.length; j++) {
    if (array[i] !== array[j]) {
      uniqueCounter++;
      i = j;
    }
  }

  return uniqueCounter;
}

console.log(countUniqueValues([-2, 0, 1, 1, 3, 3, 4])); // 5
console.log(countUniqueValues([])); // 0
