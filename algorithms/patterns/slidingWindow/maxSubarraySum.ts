/*
PROBLEM: Max Subarray Sum

Write a function called `maxSubarraySum` which accepts an array of integers and
a number `n`. The function should calculate the maximum sum of `n` consecutive
elements in the array. If the array has fewer than `n` elements, return null.

  maxSubarraySum([100, 200, 300, 400], 2)  // 700
  maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)  // 39
  maxSubarraySum([1, 2], 3)  // null

Constraints:
- Time complexity goal: O(n)
- Space complexity goal: O(1)
*/

function maxSubarraySum(
  numbers: number[],
  subarrayLength: number
): number | null {
  // check numbers array length > subarrayLength
  if (subarrayLength > numbers.length) return null;
  // Initialize a currentSum variable with the sum of the first subarray
  let currentSum = numbers
    .slice(0, subarrayLength)
    .reduce((prev, curr) => prev + curr, 0);
  // Initialize a maxSum variable with currentSum
  let maxSum = currentSum;
  // Loop from index 1, condition to run: i < numbers.length -  subarrayLength + 1
  for (let i = 1; i < numbers.length - subarrayLength + 1; i++) {
    // subtracting element at index i-1, and adding element at i + subarrayLength + 1
    currentSum = currentSum - numbers[i - 1] + numbers[i + subarrayLength - 1];
    // if (currentSum > maxSum)? maxSum = newSum
    if (currentSum > maxSum) maxSum = currentSum;
  }
  // return maxSum;
  return maxSum;
}

console.log("maxSubarraySum");
console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum([1, 2], 3)); // null
