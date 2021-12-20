function tribonacci(signature: number[], n: number): number[] {
  if (n <= 3) return signature.slice(0, n);
  const { length } = signature;
  // base case
  if (length === n) return signature;
  // change
  signature.push(
    signature[length - 1] + signature[length - 2] + signature[length - 3]
  );
  return tribonacci(signature, n);
}

console.log(tribonacci([0, 0, 1], 10)); // [0,0,1,1,2,4,7,13,24,44]
