function averagePair(numbers: number[], targetAverage: number): boolean {
  // check array to have numbers
  if (!numbers.length) return false;

  // create two pointers, one at the start, and one at the end
  let left = 0;
  let right = numbers.length - 1;

  // start a loop that ends when they meet
  while (left < right) {
    // if (left element + right element) / 2
    const average = (numbers[left] + numbers[right]) / 2;
    if (average > targetAverage) {
      right--;
    } else if (average < targetAverage) {
      left++;
    } else {
      return true;
    }
  }

  return false;
}

//  i                 j
// [1, 3, 4, 5, 6, 8, 10]

console.log("averagePair");
console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
