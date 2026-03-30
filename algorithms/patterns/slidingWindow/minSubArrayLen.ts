/*
PROBLEM: Minimum Sub Array Length

Write a function called `minSubArrayLen` which accepts two parameters — an array
of positive integers and a positive integer `sum`. The function should return the
minimal length of a contiguous subarray whose sum is greater than or equal to `sum`.
If there is none, return 0.

  minSubArrayLen([4, 1, 3, 2, 4], 6)  // 2
  minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)  // 3
  minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)  // 5

Constraints:
- Time complexity goal: O(n)
- Space complexity goal: O(1)
*/

function getSum(numbers: number[]): number {
  return numbers.reduce((prev, curr) => prev + curr, 0);
}

function minSubArrayLen(numbers: number[], sum: number): number {
  // create a variable to hold the minimum length "minLength"
  let minLength = Infinity;
  // create 2 pointers that start at 0
  let i = 0;
  let j = 0;
  // create a loop, run condition: 2nd pointer < numbers.length
  while (j < numbers.length) {
    // if sum(i, j) >= sum ?
    const currentSum = getSum(numbers.slice(i, j + 1));
    if (currentSum >= sum) {
      // if (currentLength < minLength) ? minLength = currentLength, minLengthSum = currentSum
      const currentLength = j - i + 1;
      if (currentLength < minLength) {
        minLength = currentLength;
      }
      // i++
      i++;
    }
    // else
    else {
      // j++
      j++;
    }
  }
  // return minLength;
  return Number.isFinite(minLength) ? minLength : 0;
}

//  i
// [4, 1, 3, 2, 4], 6 => 2
//     j
console.log("minSubArrayLen");
console.log(minSubArrayLen([4, 1, 3, 2, 4], 6)); // 2
