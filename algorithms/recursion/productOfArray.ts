function productOfArray(array: number[]): number {
  // (base case): if array.length === 0, return 0
  if (array.length === 0) return 1;
  // (input change) array[0] + productOfArray(array.slice(1))
  return array[0] * productOfArray(array.slice(1));
}

console.log(productOfArray([1, 2, 3])); // 6
