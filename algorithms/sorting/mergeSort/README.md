# Merge Sort

## Concept

A **divide-and-conquer** algorithm. Repeatedly split the array in half until each piece has one element (trivially sorted), then **merge** the sorted pieces back together in order.

The key insight: merging two already-sorted arrays can be done in O(n + m) — much cheaper than sorting from scratch.

## Walkthrough

```
mergeSort([4, 3, 2, 1])

Split:
  [4, 3]           [2, 1]
  [4]  [3]         [2]  [1]

Merge back:
  merge([4],[3]) → [3, 4]
  merge([2],[1]) → [1, 2]
  merge([3,4],[1,2]) → [1, 2, 3, 4] ✓
```

## Merge Step

Compare the front elements of both sorted arrays, pick the smaller one, advance that pointer. When one array is exhausted, append the rest of the other.

```
merge([1, 3, 7], [2, 4, 6, 9])
        i              j

1 < 2 → take 1, i++     → [1]
3 > 2 → take 2, j++     → [1, 2]
3 < 4 → take 3, i++     → [1, 2, 3]
7 > 4 → take 4, j++     → [1, 2, 3, 4]
7 > 6 → take 6, j++     → [1, 2, 3, 4, 6]
7 < 9 → take 7, i++ (done) → append [9]
→ [1, 2, 3, 4, 6, 7, 9] ✓
```

## Why O(n log n)?

- **log n levels** of splitting (halving until size 1)
- **O(n) work per level** (merging all pairs at one level touches every element once)
- Total: O(n log n) — regardless of input order

```
Level 0:  [4, 3, 2, 1]                  ← n work to merge
Level 1:  [4,3]    [2,1]                ← n work to merge
Level 2:  [4] [3]  [2] [1]              ← trivially sorted
          ↑
       log₂(n) levels
```

## Complexity

| Case | Time | Space |
|---|---|---|
| Best | O(n log n) | O(n) |
| Average | O(n log n) | O(n) |
| Worst | O(n log n) | O(n) |

Space is O(n) because merging creates new arrays (it doesn't sort in place).

## When to Use

- When **guaranteed O(n log n)** is needed (unlike quicksort, which can degrade to O(n²))
- When you can afford the **O(n) extra space**
- Works equally well on **linked lists** (no random access needed)

## Files in This Folder

| File | Role |
|---|---|
| `merge.ts` | Merges two sorted arrays into one sorted array — O(n + m) |
| `mergeSort.ts` | Recursively splits and merges |
