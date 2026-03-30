/**
We define a magic square to be an  matrix of distinct positive integers from  to  where the sum of any row, column, or diagonal of length  is always equal to the same number: the magic constant.

You will be given a  matrix  of integers in the inclusive range . We can convert any digit  to any other digit  in the range  at cost of . Given , convert it into a magic square at minimal cost. Print this cost on a new line.

Note: The resulting magic square must contain distinct integers in the inclusive range .

Example

$s = [[5, 3, 4], [1, 5, 8], [6, 4, 2]]

The matrix looks like this:

5 3 4
1 5 8
6 4 2
We can convert it to the following magic square:

8 3 4
1 5 9
6 7 2
This took three replacements at a cost of |5 - 8| + |8 - 9| + |4 - 7| = 7
 */

function sumArray(nums: number[]) {
  return nums.reduce((prev, curr) => prev + curr, 0);
}

function formatMatrix(matrix: number[][]) {
  // rows
  let result = matrix;

  // cols
  for (let i = 0; i < matrix.length; i++) {
    const col = [matrix[0][i], matrix[1][i], matrix[2][i]];
    result = result.concat([col]);
  }

  // diagonals
  const diagonal1 = [matrix[0][0], matrix[1][1], matrix[2][2]];
  const diagonal2 = [matrix[0][2], matrix[1][1], matrix[2][0]];
  result = result.concat([diagonal1, diagonal2]);

  return result;
}

function isMagicSquare(matrix: number[][]) {
  return new Set(formatMatrix(matrix).map(sumArray)).size == 1;
}

function frequencyCounter(array: number[]) {}

function formingMagicSquare(matrix: number[][]) {
  // Write your code here
  // How to know the constant number
  // 12, 12, 14, 12, 14, 12, 12, 15
  // the constant number is the most frequent number in the matrix

  // 1. Get the constant number by finding the most frequent

  console.log(formatMatrix(matrix), isMagicSquare(matrix));
}

const matrix = [
  [5, 3, 4],
  [1, 5, 8],
  [6, 4, 2],
];

// console.log(formatMatrix(matrix));
console.log(formingMagicSquare(matrix));
