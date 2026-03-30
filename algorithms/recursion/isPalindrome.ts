/*
PROBLEM: Is Palindrome

Write a recursive function called `isPalindrome` which returns true if the string
passed to it is a palindrome (reads the same forward and backward), and false otherwise.

  isPalindrome("dad")     // true
  isPalindrome("commoc")  // true
  isPalindrome("common")  // false
  isPalindrome("a")       // true
  isPalindrome("")        // true
*/

function isPalindrome(string: string): boolean {
  // base case
  if (string.length === 0 || string.length === 1) return true;

  if (string[0] !== string.slice(-1)) return false;

  // different input
  return isPalindrome(string.slice(1, -1));
}

console.log(isPalindrome("dad")); // true
console.log(isPalindrome("common")); // false
console.log(isPalindrome("commoc")); // true

/*
"commoc"
isPalindrome(string.slice(1, string.length - 1));
  "ommo"
  isPalindrome(string.slice(1, string.length - 1));
    "mm"
      isPalindrome(string.slice(1, string.length - 1));
      ""  
*/
