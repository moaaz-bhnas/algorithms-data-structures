// try again
function findLongestSubstring(string: string): number {
  // create a variable to hold the maximumLength
  let maxLength = 0;
  // create 2 pointers that start at 0: i, j
  let i = 0;
  let j = 0;
  // create an indexer object for the string to hold last index for each char
  // so when a character re-occurs, i starts right after that character index.
  const indexer: { [key: string]: number } = {};
  // create a loop. run condition: j < string.length
  while (j < string.length) {
    const character = string[j];
    // if (indexer[char] && indexer[char] >= i)
    if (Number.isInteger(indexer[character]) && indexer[character] >= i) {
      // currentLength = j - i
      const currentLength = j - i;
      // if (currentLength > maximumLength) maximumLength = currentLength
      if (currentLength > maxLength) maxLength = currentLength;
      // i = indexer[char] + 1
      i = indexer[character] + 1;
    }

    // indexer[char] = j
    indexer[character] = j;
    // j++
    j++;
  }
  // return maximumLength
  return maxLength;
}

//  i
// "thisishowwedoit" => 7
//        j

/*
indexer: {
  t: 0,
  o: 1,
  k: 2,
  y: 3,
}
*/

console.log(findLongestSubstring("tokyorevengers")); // 6
console.log(findLongestSubstring("longestsubstring")); // 7
console.log(findLongestSubstring("thisishowwedoit")); // 5
console.log(findLongestSubstring("aaaaaa")); // 1

function fls(string: string) {
  // Create a variable to store the max length
  var maxLength = -Infinity;
  // Create an object to store each character index, so when a letter is repeated
  // we can calculate the length
  var seen: { [key: string]: number } = {};

  // Create two pointers, i and j, both starting at 0
  var i = 0;
  var j = 0;

  // Loop over the string, and for each letter
  while (j < string.length) {
    // if it exists in the indexer
    const char = string[j];
    if (seen[char]) {
      const currLength = j - i;
      // check if the length between i and j is longer than maxLength, then reset it
      if (currLength > maxLength) maxLength = currLength;

      // start i from j
      i = j + 1;
    }

    // else
    // Add the character to the index

    // j++
  }
}
