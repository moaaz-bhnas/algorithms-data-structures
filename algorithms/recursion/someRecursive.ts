function someRecursive(array: any[], callback: Function): boolean {
  // base case
  if (array.length === 0) return false;

  if (callback(array[0])) return true;

  // different input
  return someRecursive(array.slice(1), callback);
}

const isOdd = (val: number) => val % 2 !== 0;

console.log(someRecursive([1, 2, 3, 4], isOdd)); // true
