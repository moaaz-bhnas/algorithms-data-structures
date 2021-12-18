function recursiveRange(number: number): number {
  // base case
  if (number === 0) return 0;
  // input change
  return number + recursiveRange(number - 1);
}

console.log(recursiveRange(4)); // 10
