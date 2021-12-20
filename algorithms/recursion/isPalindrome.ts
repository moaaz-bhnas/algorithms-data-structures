function isPalindrome(string: string): boolean {
  const { length } = string;

  if (string[0] !== string[length - 1]) return false;

  // base case
  if (length === 0 || length === 1) return true;

  // different input
  return isPalindrome(string.slice(1, string.length - 1));
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
