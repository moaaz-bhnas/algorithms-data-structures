/*
PROBLEM: Reverse

Write a recursive function called `reverse` which accepts a string and returns
a new string with the characters in reverse order.

  reverse("hey")      // "yeh"
  reverse("awesome")  // "emosewa"
  reverse("a")        // "a"
*/

function reverse(string: string): string {
  // base case
  if (string.length === 0) return "";
  // input change
  return (
    string[string.length - 1] + reverse(string.slice(0, string.length - 1))
  );
}

console.log(reverse("hey")); // yeh
