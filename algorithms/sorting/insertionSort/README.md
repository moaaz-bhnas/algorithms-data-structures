# Insertion Sort

## Concept

Maintain a **sorted left portion** of the array and grow it one element at a time. For each new element, slide it leftward into its correct position within the sorted portion — like sorting a hand of playing cards.

## Walkthrough

```
[4, 2, 3, 1]

i=1, current=2:
  [4, 4, 3, 1]   ← shift 4 right
  [2, 4, 3, 1]   ← insert 2

i=2, current=3:
  [2, 4, 4, 1]   ← shift 4 right
  [2, 3, 4, 1]   ← insert 3

i=3, current=1:
  [2, 3, 4, 4]   ← shift 4 right
  [2, 3, 3, 4]   ← shift 3 right
  [2, 2, 3, 4]   ← shift 2 right
  [1, 2, 3, 4]   ← insert 1

Done ✓
```

## Key Detail

The inner loop shifts elements right (instead of swapping) to make room. This means each element only moves once per pass, which is why insertion sort performs very well in practice on small or nearly-sorted arrays.

## Complexity

| Case | Time | Space |
|---|---|---|
| Best (sorted) | O(n) | O(1) |
| Average | O(n²) | O(1) |
| Worst (reverse sorted) | O(n²) | O(1) |

## When to Use

- **Nearly-sorted data** — very fast in practice since few shifts are needed
- **Online / streaming data** — can sort a new element into an already-sorted list in O(n)
- **Small arrays** — many standard library sort implementations switch to insertion sort below a threshold (~10–20 elements) because it has low overhead

## Comparison With Bubble Sort

Both are O(n²) on average, but insertion sort:
- Does fewer writes (shifts instead of swaps)
- Handles nearly-sorted arrays better
- Is the preferred O(n²) algorithm in practice

## Files in This Folder

| File | Role |
|---|---|
| `insertionSort.ts` | Main sort function |
