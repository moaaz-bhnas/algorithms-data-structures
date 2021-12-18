function power(base: number, exponent: number): number {
  // (base case): if exponent === 0, return 1
  if (exponent === 0) return 1;
  // return base * power(base, exponent-1)
  return base * power(base, exponent - 1);
}

console.log(power(2, 0)); // 1
console.log(power(2, 1)); // 2
console.log(power(2, 2)); // 4
