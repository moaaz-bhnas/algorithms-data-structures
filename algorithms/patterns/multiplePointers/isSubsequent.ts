/*
PROBLEM: Is Subsequence

Write a function called `isSubsequent` which takes in two strings and checks
whether the characters in the first string form a subsequence of the second
string. The characters in the first string must appear in the second string in
their original order, but not necessarily consecutively.

  isSubsequent("moaaz", "moaaz ahmed")  // true
  isSubsequent("abc", "atgbokc")        // true
  isSubsequent("abc", "acb")            // false

Constraints:
- Time complexity goal: O(n + m)
- Space complexity goal: O(1)
- Bonus: can you solve it recursively?
*/

function isSubsequent(string1: string, string2: string): boolean {
  // create 2 pointers: one (i) for string1, and the other (j) for string2
  let i = 0;
  // loop over string2 (condition: one of the strings is exausted)
  for (let j = 0; j < string2.length; j++) {
    // if: string2[j] === string1[i] ? if: i === last index? return true : i++
    if (string2[j] === string1[i]) {
      const lastIndexOfString1 = i === string1.length - 1;
      if (lastIndexOfString1) return true;
      else i++;
    }
  }
  // return false
  return false;
}

//       i
//  "moaaz", "member: moaaz ahmed"
//                        j

console.log("isSubsequent");
console.log(isSubsequent("moaaz", "moaaz ahmed")); // true
console.log(isSubsequent("abc", "atgbokc")); // true
console.log(isSubsequent("abc", "acb")); // false

function isSubsequent_recursive(string1: string, string2: string): boolean {
  if (string1.length === 0) return true;
  if (string2.length === 0) return false;
  if (string1[0] === string2[0])
    return isSubsequent_recursive(string1.slice(1), string2.slice(1));
  else return isSubsequent_recursive(string1.slice(0), string2.slice(1));
}

//       i
//  "moaaz", "member: moaaz ahmed" => "", " ahmed"
//                        j

console.log("isSubsequent_recursive");
console.log(isSubsequent_recursive("moaaz", "moaaz ahmed")); // true
console.log(isSubsequent_recursive("abc", "atgbokc")); // true
console.log(isSubsequent_recursive("abc", "acb")); // false
