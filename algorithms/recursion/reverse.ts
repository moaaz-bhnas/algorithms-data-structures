function reverse(string: string): string {
  // base case
  if (string.length === 0) return "";
  // input change
  return (
    string[string.length - 1] + reverse(string.slice(0, string.length - 1))
  );
}

console.log(reverse("hey")); // yeh
