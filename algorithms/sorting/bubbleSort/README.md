# Bubble Sort

## Concept

Repeatedly walk through the array comparing **adjacent pairs**. If a pair is out of order, swap them. After each full pass, the largest unsorted element has "bubbled up" to its correct position at the end. Repeat until no swaps are needed.

## Walkthrough

```
[4, 2, 3, 1]

Pass 1:
  [4, 2, 3, 1] → swap(4,2) → [2, 4, 3, 1]
  [2, 4, 3, 1] → swap(4,3) → [2, 3, 4, 1]
  [2, 3, 4, 1] → swap(4,1) → [2, 3, 1, 4]  ← 4 is in place

Pass 2:
  [2, 3, 1, 4] → no swap
  [2, 3, 1, 4] → swap(3,1) → [2, 1, 3, 4]  ← 3 is in place

Pass 3:
  [2, 1, 3, 4] → swap(2,1) → [1, 2, 3, 4]  ← 2 is in place

Pass 4:
  No swaps → array is sorted ✓
```

## Optimisation

Track whether **any swap happened** in a pass. If not, the array is already sorted — break early.  
This makes best-case **O(n)** (one clean pass over a sorted array).

## Complexity

| Case | Time | Space |
|---|---|---|
| Best (sorted) | O(n) | O(1) |
| Average | O(n²) | O(1) |
| Worst (reverse sorted) | O(n²) | O(1) |

## When to Use

Mostly for educational purposes. Rarely used in practice due to O(n²) average case.  
The early-exit optimisation makes it acceptable for **nearly-sorted** data.

## Files in This Folder

| File | Role |
|---|---|
| `bubbleSort.ts` | Main sort function |
| `swap.ts` | In-place swap helper (reused by selection sort, quick sort) |
