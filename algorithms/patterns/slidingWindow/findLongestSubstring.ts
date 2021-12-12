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
      // indexer[char] = j
      indexer[character] = j;
    }
    // else
    else {
      indexer[character] = j;
    }
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
