# Sliding Window Pattern

## Concept

Maintain a **window** — a contiguous sub-section of an array or string — and slide it across the data one step at a time. Instead of re-computing the window's value from scratch at every position, you update it incrementally: subtract the element that left the window, add the element that entered.

This turns many O(n²) brute-force solutions into **O(n)**.

## When to Use

- Finding a subarray/substring of **fixed length** with some maximum/minimum property (sum, count of distinct chars, …)
- Finding the **shortest or longest** subarray/substring that satisfies a condition
- Any problem involving a contiguous slice of a sequence

## Fixed-Size Window

Window size `k` stays constant. Slide by removing `arr[i-1]` and adding `arr[i+k-1]`.

```
[1, 2, 5, 2, 8, 1, 5],  k = 2

Initial window:  [1, 2]  sum = 3
Slide →          [2, 5]  sum = 3 - 1 + 5 = 7
Slide →          [5, 2]  sum = 7 - 2 + 2 = 7
Slide →          [2, 8]  sum = 7 - 5 + 8 = 10  ← max
...
```

## Variable-Size Window

Window size changes based on a condition. Two pointers `i` (left) and `j` (right):
- Expand: `j++` when the condition isn't met yet
- Shrink: `i++` when the condition is over-satisfied (minimise) or met (track length)

```
[4, 1, 3, 2, 4],  target sum ≥ 6

 i
[4]          sum = 4  < 6 → expand
[4,1]        sum = 5  < 6 → expand
[4,1,3]      sum = 8 ≥ 6 → length 3, shrink
  [1,3]      sum = 4  < 6 → expand
  [1,3,2]    sum = 6 ≥ 6 → length 3, shrink
    [3,2]    sum = 5  < 6 → expand
    [3,2,4]  sum = 9 ≥ 6 → length 3, shrink
      [2,4]  sum = 6 ≥ 6 → length 2 ← min ✓
```

## Complexity

| | Time | Space |
|---|---|---|
| Fixed window | O(n) | O(1) |
| Variable window | O(n) | O(1) to O(n) depending on aux structure |

## Files in This Folder

| File | Problem |
|---|---|
| `maxSubarraySum.ts` | Maximum sum of `n` consecutive elements (fixed window) |
| `minSubArrayLen.ts` | Shortest subarray with sum ≥ target (variable window) |
| `findLongestSubstring.ts` | Longest substring with all unique characters (variable window + map) |

## Tips

- For fixed windows, initialise with the first `k` elements, then loop from index `1`.
- For variable windows, track when to shrink vs expand clearly before coding.
- `findLongestSubstring` uses a character-index map so `i` can jump ahead without re-scanning — this is the classic optimisation for the "no repeating characters" variant.
