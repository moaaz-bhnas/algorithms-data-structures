# Frequency Counter / Multiple Pointers — Combined

## Concept

Some problems can be solved with **either** the Frequency Counter pattern or the Multiple Pointers pattern. The right choice depends on whether sorting the input is acceptable and what space complexity you need.

| Approach | Requires sorting? | Time | Space |
|---|---|---|---|
| Frequency Counter | No | O(n) | O(n) |
| Multiple Pointers | Yes (or already sorted) | O(n log n) → O(n) | O(1) |

## The Problem in This Folder

**Are There Duplicates?** — given a variable number of arguments, determine if any value appears more than once.

### Approach 1 — Frequency Counter

Build a frequency map in one pass. If any value has count > 1, return `true`.

```
[1, 2, 2, 3]
Map: { 1:1, 2:2, 3:1 }
2 has count > 1 → true ✓
```

### Approach 2 — Multiple Pointers (after sorting)

Sort first, then walk with two adjacent pointers. If they ever point at equal values, return `true`.

```
["a", "b", "b", "c"]  →  sort  →  ["a", "b", "b", "c"]
 i                                   i
                                        j
array[i] !== array[j] → i = j → advance j
array[i] === array[j] → true ✓
```

### Approach 3 — Set (one-liner)

```ts
new Set(array).size !== array.length
```

O(n) time, O(n) space — the simplest form, but worth knowing the manual approaches too.

## Files in This Folder

| File | Problem |
|---|---|
| `areThereDuplicates.ts` | Detect duplicate values in a list of arguments (3 approaches) |
