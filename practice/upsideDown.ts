// Kata: https://www.codewars.com/kata/59f98052120be4abfa000304/train/javascript

function hasNonRotatableInteger(number: number): boolean {
  const regex = new RegExp("[^01689]");
  return regex.test(String(number));
}

// Create a function that takes two arguments
function upsideDown(start: string, end: string): number {
  // const nonRotatables = [2, 3, 4, ..]
  const count = 0;
  for (let i = Number(start); i <= Number(end); i++) {
    if (hasNonRotatableInteger(i)) continue;
    // Create a function to check 6 or 9
    // Create a function that checks if palindrome
  }
  return count;
}

// upsideDown(0, 12) => 4, the valid numbers are: 0, 1, 8, 11
