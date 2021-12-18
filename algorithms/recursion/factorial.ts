function factorial(number: number): number {
  // (base case): if number === 0, return 1
  if (number === 0) return 1;
  // (input change) number * factorial(number - 1)
  return number * factorial(number - 1);
}

console.log(factorial(3)); // 6
console.log(factorial(0)); // 1
