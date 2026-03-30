# Radix Sort

## Concept

Radix sort is a **non-comparison** sorting algorithm. Instead of deciding the order by comparing two numbers, it sorts by **individual digits**, from least significant (ones) to most significant.

Because it never compares elements directly, its time complexity doesn't have the O(n log n) comparison-sort lower bound.

## How It Works

Repeat for each digit position (ones, tens, hundreds, …):

1. Create 10 empty **buckets** (one per digit 0–9)
2. Place each number into the bucket matching its digit at the current position
3. Flatten the buckets back into a single array (preserving order)

After processing all digit positions, the array is sorted.

## Walkthrough

```
[170, 45, 75, 90, 2, 802, 2, 66]

Pass 1 — ones digit:
  Bucket 0: [170, 90]
  Bucket 2: [2, 802, 2]
  Bucket 5: [45, 75]
  Bucket 6: [66]
  → [170, 90, 2, 802, 2, 45, 75, 66]

Pass 2 — tens digit:
  Bucket 0: [2, 802, 2]
  Bucket 4: [45]
  Bucket 6: [66]
  Bucket 7: [170, 75]
  Bucket 9: [90]
  → [2, 802, 2, 45, 66, 170, 75, 90]

Pass 3 — hundreds digit:
  Bucket 0: [2, 2, 45, 66, 75, 90]
  Bucket 1: [170]
  Bucket 8: [802]
  → [2, 2, 45, 66, 75, 90, 170, 802] ✓
```

## Why This Works

After each pass, numbers are sorted relative to all digits seen so far. Maintaining the order within buckets (FIFO) ensures earlier passes aren't destroyed by later ones — this is called a **stable sort**.

## Complexity

| | Value |
|---|---|
| Time | O(n · k) |
| Space | O(n + k) |

Where:
- **n** = number of elements
- **k** = number of digits in the largest number (≈ log₁₀(max))

For typical integers, k is small (10 passes for a billion), making this very fast in practice.

## When to Use

- Sorting **integers** (or strings of fixed length)
- When n is large and the range of values is bounded
- When you need a guaranteed non-O(n log n) sort

**Not suitable for:** floating point numbers, arbitrary objects, or cases where comparisons are needed.

## Files in This Folder

| File | Role |
|---|---|
| `getDigit.ts` | Returns the digit at a given position (0 = ones) |
| `digitsCount.ts` | Returns the number of digits in a number |
| `getMostDigits.ts` | Returns the max digit count in an array of numbers |
| `radixSort.ts` | Main sort — orchestrates bucket passes using the helpers |
