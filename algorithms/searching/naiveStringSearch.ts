// with .slice()
// function naiveStringSearch(string: string, substring: string): number {
//   let matches = 0;

//   for (let index = 0; index < string.length - substring.length + 1; index++) {
//     if (substring === string.slice(index, index + substring.length)) matches++;
//   }

//   return matches;
// }

// with nested loop
function naiveStringSearch(string: string, substring: string): number {
  let matches = 0;

  for (let i = 0; i < string.length - (substring.length - 1); i++) {
    for (let j = 0; j < substring.length; j++) {
      if (string[i + j] !== substring[j]) break;
      if (j === substring.length - 1) matches++;
    }
  }

  return matches;
}

console.log(naiveStringSearch("dorodo", "do")); // 2
