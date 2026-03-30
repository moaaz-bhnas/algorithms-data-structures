# Selection Sort

## Concept

Divide the array into a **sorted left portion** and an **unsorted right portion**. In each pass, find the **minimum element** in the unsorted portion and swap it to the front of that portion. Repeat until the entire array is sorted.

Unlike bubble sort (which swaps frequently), selection sort does at most **one swap per pass** — making it efficient when writes are expensive.

## Walkthrough

```
[4, 2, 3, 1]

Pass 1 (i=0): find min in [4,2,3,1] → 1 at index 3 → swap(0,3)
  [1, 2, 3, 4]   ← 1 is in place

Pass 2 (i=1): find min in [2,3,4] → 2 at index 1 → no swap needed
  [1, 2, 3, 4]   ← 2 is in place

Pass 3 (i=2): find min in [3,4] → 3 at index 2 → no swap needed
  [1, 2, 3, 4]   ← 3 is in place

Done ✓
```

## Complexity

| Case | Time | Space |
|---|---|---|
| Best | O(n²) | O(1) |
| Average | O(n²) | O(1) |
| Worst | O(n²) | O(1) |

Unlike bubble sort, there is **no best-case improvement** — selection sort always scans the full unsorted portion to find the minimum, even if the array is already sorted.

## Selection Sort vs Bubble Sort

| | Selection Sort | Bubble Sort |
|---|---|---|
| Swaps per pass | At most 1 | Up to n-1 |
| Best case | O(n²) | O(n) with optimisation |
| Writes to memory | Fewer | More |
| Use when | Writes are expensive | Input is nearly sorted |

## When to Use

- When **memory writes are expensive** (e.g., flash memory, slow external storage)
- Educational purposes — demonstrates the concept of finding a minimum clearly

In most other cases, insertion sort is preferred over both selection and bubble sort.

## Files in This Folder

| File | Role |
|---|---|
| `selectionSort.ts` | Main sort function |
