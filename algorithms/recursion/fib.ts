// 1, 1, 2, 3, 5, 8, 13

// create a recursion helper method
// define an empty array

function helper(nth: number): number {
  const sequence: number[] = [];

  function fib(index: number, nth: number): void {
    if (nth === 0) return;

    if (index === 0 || index === 1) {
      sequence.push(1);
    } else {
      sequence.push(sequence[index - 1] + sequence[index - 2]);
    }

    return fib(index + 1, nth - 1);
  }

  fib(0, nth);

  return sequence[nth - 1];
}

console.log(helper(4)); // 3

/*
fib(0, 4)
[1]
  fib(1, 3)
  [1, 1]
    fib(2, 2)
    [1, 1, 2]
      fib(3, 1)
      [1, 1, 2, 3]
        fib(4, 0)
*/
