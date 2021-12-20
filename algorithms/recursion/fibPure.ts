function fib(nth: number, index: number = 0, sequence: number[] = []): number {
  // base case
  if (nth === 0) return sequence[sequence.length - 1];

  if (index === 0 || index === 1) {
    sequence.push(1);
  } else {
    sequence.push(sequence[index - 1] + sequence[index - 2]);
  }

  // input change
  return fib(nth - 1, index + 1, sequence);
}

console.log(fib(4)); // 3

// 1, 1, 2, 3, 5, 8, 13

/*
fib(4, 0, [])
[1]
  fib(3, 1, [1])
  [1, 1]
    fib(2, 2, [1, 1])
    [1, 1, 2]
      fib(1, 3, [1, 1, 2])
      [1, 1, 2, 3]
        fib(4, 0)
*/
