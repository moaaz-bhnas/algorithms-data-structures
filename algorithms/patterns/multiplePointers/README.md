# Multiple Pointers Pattern

## Concept

Create two (or more) **pointer variables** that reference positions in a sorted array or string, and move them toward each other (or both forward) based on a condition. Since the input is sorted, the relative position of the pointers tells you something useful without extra lookups.

No auxiliary data structures needed — space complexity is typically **O(1)**.

## When to Use

- Input is sorted (or can be sorted cheaply)
- Looking for pairs/triplets that satisfy a condition (sum, average, difference)
- Counting or finding unique values
- Checking subsequences

## Pointer Configurations

### Converging — start at both ends, move inward

```
[1, 3, 5, 7, 9]
 L           R        → compare L + R vs target
                        if too large: R--
                        if too small: L++
                        if equal:     found ✓
```

Best for: pair sum, average pair, two-sum on sorted array.

### Same direction — both start at the left

```
[-2, 0, 1, 1, 3, 3, 4]
  i  j                  → i is the "last seen unique", j scans ahead
                           if arr[i] !== arr[j]: new unique found, i = j
```

Best for: counting unique values, removing duplicates in-place.

### One per string — both move forward

```
"abc"   "atgbokc"
  i         j          → advance j each step
                          advance i when arr[i] === arr[j]
```

Best for: subsequence checks.

## Complexity

| | Time | Space |
|---|---|---|
| Typical | O(n) | O(1) |
| With sorting | O(n log n) | O(1) |

## Files in This Folder

| File | Problem |
|---|---|
| `countUniqueValues.ts` | Count unique values in a sorted array |
| `averagePair.ts` | Does any pair in a sorted array average to the target? |
| `isSubsequent.ts` | Are the characters of string1 a subsequence of string2? |

## Tips

- Always think: *do I need the input sorted?* If yes, the upfront sort cost (O(n log n)) may still beat a nested loop (O(n²)).
- The "while left < right" loop is the classic converging pointer skeleton.
- For the same-direction case, `i` tracks progress and `j` does the scanning.
