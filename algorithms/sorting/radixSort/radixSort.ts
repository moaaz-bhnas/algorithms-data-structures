// Just watch: https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/8344146#overview

import getDigit from "./getDigit";
import getMostDigits from "./getMostDigits";

function radixSort(numbers: number[]): number[] {
  // Get the max digits count to figure out the number of iterations to sort numbers into buckets
  const mostDigits = getMostDigits(numbers);
  // Loop
  for (let i = 0; i < mostDigits; i++) {
    // create empty 2d array (buckets)
    const buckets = Array.from({ length: 10 }, () => []);
    // for each number
    numbers.forEach((number) => {
      // get the i digit and add it to the right bucket
      const digit = getDigit(number, i);
      buckets[digit].push(number);
    });
    // arrange numbers in the buckets into the outside empty array
    numbers = buckets.flat();
  }
  // return
  return numbers;
}

console.log(radixSort([2, 90, 65, 2560, 16, 7])); // [2, 7, 16, 65, 90, 2560]
