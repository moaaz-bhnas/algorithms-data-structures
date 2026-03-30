# Recursion

## Concept

A function that **calls itself** with a smaller or simpler version of the original input until it reaches a stopping condition. Every recursive solution has two essential parts:

1. **Base case** — the condition that stops the recursion (no self-call)
2. **Recursive case** — the self-call with a *different* (smaller/simpler) input

If there is no base case, or the input never reaches it, you get a stack overflow.

## The Call Stack

Each function call is pushed onto the call stack. When the base case is hit, calls start returning and popping off.

```
factorial(4)
  4 * factorial(3)
        3 * factorial(2)
              2 * factorial(1)
                    1 * factorial(0)
                          return 1       ← base case
                    return 1 * 1 = 1
              return 2 * 1 = 2
        return 3 * 2 = 6
  return 4 * 6 = 24
```

## Two Implementation Styles

### Helper Mutation

An inner helper function closes over an outer variable (usually an array or accumulator). The outer function sets up the variable and calls the helper.

```ts
function outer(input) {
  const result = [];           // ← shared state

  function helper(input) {
    if (base case) return;
    result.push(...);          // ← mutate outer variable
    helper(smaller input);
  }

  helper(input);
  return result;
}
```

Use when: you need to accumulate results across recursive calls.

### Pure Recursion

No outer variables. Everything is passed as parameters or returned and combined.

```ts
function pure(input): Result {
  if (base case) return emptyResult;
  return combine(head, pure(tail));
}
```

Use when: you want a cleaner functional style. The trick is combining results on the way back up (via `concat`, `+`, `*`, etc.).

## Designing a Recursive Function

1. Identify the **base case** (smallest valid input, empty array/string, n=0, etc.)
2. Decide how to make the input **smaller** each call (slice, n-1, skip a key)
3. Decide how to **combine** the recursive result with the current step

## Complexity

Recursion doesn't automatically change time complexity — it depends on how many calls are made and what happens at each call.

| Pattern | Calls | Example |
|---|---|---|
| Linear | O(n) | `factorial`, `reverse`, `flatten` |
| Branching | O(2ⁿ) | naïve `fib` (each call splits into two) |
| Divide & conquer | O(n log n) | `mergeSort` |

## Files in This Folder

| File | Core technique |
|---|---|
| `factorial.ts` | Linear recursion, base case n=0 |
| `power.ts` | Linear recursion, base case exponent=0 |
| `productOfArray.ts` | Pure recursion, combine with `*` |
| `recursiveRange.ts` | Pure recursion, combine with `+` |
| `fib.ts` | Helper mutation — builds sequence array |
| `fibPure.ts` | Pure recursion — sequence passed as parameter |
| `reverse.ts` | Pure recursion on strings |
| `isPalindrome.ts` | Pure recursion, shrink from both ends |
| `someRecursive.ts` | Short-circuit recursion with callback |
| `flatten.ts` | Helper mutation, nested array recursion |
| `flattenBest.ts` | Loop-based recursion (for loop inside) |
| `flattenPure.ts` | Pure recursion with `concat` |
| `capitalizeFirst.ts` | Pure recursion on arrays |
| `capitalizeWords.ts` | Pure recursion on arrays |
| `nestedEvenSum.ts` | Pure recursion on objects |
| `nestedEvenSumLoop.ts` | Loop-based recursion on objects |
| `stringifyNumbers.ts` | Loop-based recursion, object transformation |
| `collectStrings.ts` | Loop-based recursion, collect values |
| `tribonacci.ts` | Tail-recursive accumulation |
| `operationsFormatter.ts` | Recursive expression parsing |

## Common Pitfalls

- **Forgetting the base case** → infinite recursion / stack overflow
- **Not actually changing the input** → recursion calls with the same argument forever
- **Mutating the input** in pure recursion → unexpected side effects
- **Naïve Fibonacci** → exponential time because the same sub-problems are recomputed; solve with memoisation or an iterative approach
