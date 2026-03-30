# Searching Algorithms

## Algorithms at a Glance

| Algorithm | Input requirement | Time (best) | Time (worst) | Notes |
|---|---|---|---|---|
| Linear Search | None | O(1) | O(n) | Works on any array |
| Binary Search | **Sorted** array | O(1) | O(log n) | Halves search space each step |
| Naive String Search | None | O(n) | O(n·m) | Counts substring occurrences |

---

## Linear Search

Scan from left to right, checking each element one by one.

```
[9, 3, 7, 1, 5],  target = 7

Check 9 → no
Check 3 → no
Check 7 → yes ✓  (index 2)
```

**When to use:** unsorted data, small arrays, or when you only need one pass anyway.

---

## Binary Search

Only works on a **sorted** array. At each step, compare the target to the **middle** element:
- Equal → found
- Target is greater → discard the left half
- Target is less → discard the right half

Each comparison eliminates half the remaining elements.

```
[1, 3, 5, 7, 9, 11, 13],  target = 7

Step 1: left=0, right=6, mid=3  → arr[3]=7 === 7 ✓  (found at index 3)

Step 1: left=0, right=6, mid=3  → arr[3]=7 > target=3 → right=2
Step 2: left=0, right=2, mid=1  → arr[1]=3 === 3 ✓  (found at index 1)
```

**Complexity:** O(log n) — a 1 000 000-element array takes at most ~20 comparisons.

**When to use:** any time the data is sorted (or can be sorted once).

### Why O(log n)?

After each comparison the remaining search space is halved:

```
n → n/2 → n/4 → … → 1
That takes log₂(n) steps.
```

---

## Naive String Search

Count how many times a short pattern (needle) appears in a longer string (haystack). For each position in the haystack, try to match the full needle character by character. Break out early on mismatch.

```
haystack = "dorodo",  needle = "do"

i=0: d===d, o===o → match ✓  count=1
i=1: o!==d → skip
i=2: r!==d → skip
i=3: o!==d → skip
i=4: d===d, o===o → match ✓  count=2
```

**Complexity:** O(n·m) in the worst case (e.g., searching "aaaa" in "aaaaaaa").

**When to use:** simple pattern matching; for production use, prefer KMP or built-in `indexOf`.

---

## Files in This Folder

| File | Algorithm |
|---|---|
| `linearSearch.ts` | Linear search — return index or -1 |
| `binarySearch.ts` | Binary search — return index or -1 |
| `naiveStringSearch.ts` | Count occurrences of a substring |
