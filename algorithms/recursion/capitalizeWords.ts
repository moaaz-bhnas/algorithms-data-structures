/*
PROBLEM: Capitalize Words

Write a recursive function called `capitalizeWords`. Given an array of strings,
return a new array where every string is fully uppercased.

  capitalizeWords(["ted", "lasso"])    // ["TED", "LASSO"]
  capitalizeWords(["hello", "world"])  // ["HELLO", "WORLD"]
*/

function capitalizeWords(strings: string[]): string[] {
  // base case
  if (strings.length === 0) return [];

  // different input
  return [strings[0].toUpperCase()].concat(capitalizeWords(strings.slice(1)));
}

console.log(capitalizeWords(["ted", "lasso"])); // [TED, LASSO]
