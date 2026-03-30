# Frequency Counter Pattern

## Concept

Use an object (or Map) to collect the **frequencies** of values in a collection. Instead of comparing every element against every other element, you make one or two passes to tally counts, then compare the tallies.

This avoids nested loops and brings most problems from **O(n²) → O(n)**.

## When to Use

- Checking if two collections contain the same values (anagrams, permutations)
- Detecting duplicates
- Any problem that asks "how many times does X appear?"

## How It Works

```
Step 1: Loop over the data once → build { value: count } object
Step 2: Loop over one object, compare against the other

Total: O(n) instead of O(n²)
```

### Example — Valid Anagram

```
"nagaram" vs "anagram"

Counter 1: { n:1, a:3, g:1, r:1, m:1 }
Counter 2: { a:3, n:1, g:1, r:1, m:1 }

Every key in Counter 1 has the same count in Counter 2 → true ✓
```

## Complexity

|                    | Time     | Space    |
| ------------------ | -------- | -------- |
| Build one counter  | O(n)     | O(n)     |
| Build two counters | O(n + m) | O(n + m) |
| Compare counters   | O(n)     | O(1)     |

## Files in This Folder

| File               | Problem                                           |
| ------------------ | ------------------------------------------------- |
| `validAnagram.ts`  | Are two strings anagrams of each other?           |
| `sameFrequency.ts` | Do two integers share the same digit frequencies? |

## Tips

- Using `obj[x] = (obj[x] ?? 0) + 1` is a clean one-liner for tallying.
- If you only need "does it exist at all", a `Set` is lighter than an object.
- The "subtraction" variant (build one counter, decrement for the second collection) saves a second pass.
