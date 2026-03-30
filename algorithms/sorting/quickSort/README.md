# Quick Sort

## Concept

A **divide-and-conquer** algorithm. Pick one element as the **pivot**, rearrange the array so everything smaller than the pivot is to its left and everything larger is to its right (the "partition" step), then recursively sort the two sub-arrays on either side.

The pivot ends up in its **final, correct position** after each partition — no further movement needed.

## Walkthrough

```
[3, 4, 2, 5, 1]   pivot = 3 (first element)

Partition:
  Elements < 3: [2, 1]
  Elements > 3: [4, 5]
  → [1, 2, 3, 4, 5]   (pivot lands at index 2)
           ↑
       pivot is done

Recurse left:  quickSort([1, 2])  → pivot=1, recurse → [1, 2]
Recurse right: quickSort([4, 5])  → pivot=4, recurse → [4, 5]

Result: [1, 2, 3, 4, 5] ✓
```

## Pivot (Partition) Step

Using a Lomuto-style partition (pivot = first element):

```
[3, 4, 2, 5, 1]
 ↑ pivot=3,  swapIndex=0

i=1: arr[1]=4 > 3 → skip
i=2: arr[2]=2 < 3 → swapIndex=1, swap(arr,1,2) → [3, 2, 4, 5, 1]
i=3: arr[3]=5 > 3 → skip
i=4: arr[4]=1 < 3 → swapIndex=2, swap(arr,2,4) → [3, 2, 1, 5, 4]

swap(arr, 0, swapIndex=2) → [1, 2, 3, 5, 4]
                                    ↑ pivot (3) is now in place, return index 2
```

## Complexity

| Case | Time | Space (call stack) |
|---|---|---|
| Best | O(n log n) | O(log n) |
| Average | O(n log n) | O(log n) |
| Worst (sorted input, bad pivot) | O(n²) | O(n) |

**Why worst case O(n²)?** If the pivot is always the min or max (e.g., sorted array + always picking first element), one sub-array has n-1 elements and the other has 0 — no real halving happens.

**Fix:** use a random pivot, or pick the median of three elements.

## Quick Sort vs Merge Sort

| | Quick Sort | Merge Sort |
|---|---|---|
| Average time | O(n log n) | O(n log n) |
| Worst time | O(n²) | O(n log n) |
| Space | O(log n) | O(n) |
| In-place | Yes | No |
| Cache performance | Better | Worse |

Quick sort is usually faster in practice due to better cache locality, even though merge sort has a better worst case.

## Files in This Folder

| File | Role |
|---|---|
| `pivot.ts` | Partitions a subarray around a pivot, returns pivot's final index |
| `quickSort.ts` | Recursively sorts by calling `pivot` and sorting both halves |
