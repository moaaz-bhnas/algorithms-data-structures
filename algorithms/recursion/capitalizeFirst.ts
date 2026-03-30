/*
PROBLEM: Capitalize First

Write a recursive function called `capitalizeFirst`. Given an array of strings,
return a new array where the first letter of each string is capitalized.

  capitalizeFirst(["ted", "lasso"])  // ["Ted", "Lasso"]
  capitalizeFirst(["hello", "world"])  // ["Hello", "World"]
*/

function capitalize(string: string): string {
  return string[0].toUpperCase() + string.slice(1);
}

function capitalizeFirst(strings: string[]): string[] {
  // base case
  if (strings.length === 0) return [];

  // different input
  return [capitalize(strings[0])].concat(capitalizeFirst(strings.slice(1)));
}

console.log(capitalizeFirst(["ted", "lasso"])); // ['Ted', 'Lasso']
