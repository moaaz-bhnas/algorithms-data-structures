/*
PROBLEM: Average Pair

Write a function called `averagePair`. Given a sorted array of integers and a
target average, determine if there is a pair of values in the array where the
average of the pair equals the target average. There may be more than one valid pair.

  averagePair([1, 2, 3], 2.5)                       // true
  averagePair([1, 3, 3, 5, 6, 7, 10, 10, 12, 19], 8) // true
  averagePair([-1, 0, 3, 4, 5, 6], 4.1)              // false
  averagePair([], 4)                                  // false

Constraints:
- Time complexity goal: O(n)
- Space complexity goal: O(1)
*/

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
