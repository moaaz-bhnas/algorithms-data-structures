function capitalizeWords(strings: string[]): string[] {
  // base case
  if (strings.length === 0) return [];

  // different input
  return [strings[0].toUpperCase()].concat(capitalizeWords(strings.slice(1)));
}

console.log(capitalizeWords(["ted", "lasso"])); // [TED, LASSO]
