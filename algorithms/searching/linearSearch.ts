function linearSearch(array: any[], value: any): number {
  for (let index = 0; index < array.length; index++) {
    if (array[index] === value) return index;
  }
  return -1;
}

console.log(linearSearch([1, 2, 3], 4)); // 1
