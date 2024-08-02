/** What's a binary heap?
 * It's tree structure (very similar to binary tree with some different rules)
 * - In a MaxBinaryHeap, a parent node is always greater than its children
 * - In a MinBinaryHeap, a parent node is always smaller than its children
 * - Unlike binary trees, there's no order to the left vs the right (they're just smaller)
 *       41
 *   39       33
 * 18  27  12
 * - A binary heap is as compact as possible. All the children of each node are as full as they can be and left children are filled out first.
 * - It's used to implement priority queues. Wait
 * - They're also used in graph traversal
 */

/** Storing heaps
 * We can just use arrays!
 * 🐉: How?
 *    10
 *   8   9
 * 6  7  4  5
 * Here's the array: [10, 8, 9, 6, 7, 4, 5]
 * First, add the root and its 2 children, easy => [10, 8, 9]
 * Now if we want to look for the children of 8, we skip 9 and got to [6, 7]
 * How about children of 9, we skip 6 and 7 and go to [4, 5]
 * Notice a pettern here?
 * 🐉: Nope
 * left child (2n+1)
 * right child (2n+2)
 * 🐉: wait!
 * And you need to get the parent of a child, EASSY
 * floor((n-1)/2)
 */

export default class MaxBinaryHeap {
  values: number[];

  constructor(values: number[] = []) {
    this.values = values;
  }

  /** 100
   *           20
   *       19       18
   *    17   16  12   14
   * 100
   *
   *           20
   *       19       18
   *   100   16  12   14
   * 17
   */

  insertIterative(value: number) {
    // 1. push the new value to the array
    this.values.push(value);
    // 2. Bubble up

    // get the index of both the parent and the child to be able to swap them
    var valueIdx = this.values.length - 1;
    while (valueIdx > 0) {
      var parentIdx = Math.floor((valueIdx - 1) / 2);
      // compare parent to the child
      var parent = this.values[parentIdx];
      // if value > parent, swap them
      if (value > parent) {
        this.values[parentIdx] = value;
        this.values[valueIdx] = parent;
        valueIdx = parentIdx;
      } else {
        break;
      }
    }

    return this;
  }

  insert(
    value: number,
    values = this.values.concat(value),
    valueIdx = values.length - 1
  ) {
    var parentIdx = Math.floor((valueIdx - 1) / 2);
    var parent = values[parentIdx];

    // base cases
    if (value <= parent || valueIdx == 0) {
      this.values = values;
      return this;
    }

    values[parentIdx] = value;
    values[valueIdx] = parent;
    this.insert(value, values, parentIdx);
  }

  /**
   * Removes the root and assigns a new one by bubbling down
   *           20
   *       19       18
   *    17   16  12   14
   * 1. Swap the root with most recent number, and then remove the recent
   *           14
   *       19       18
   *    17   16  12
   * 2. Compare left / right children with the parent (14)
   * - if both are smaller or don't exist, you are done
   * - if one of them is greater, swap it with the parent, then repeat
   * - if both are greater, swap with the greatest
   */
  extractMax() {
    var root = this.values[0];
    // 1. swap
    this.values[0] = this.values[this.values.length - 1];
    this.values.pop();

    var currentIdx = 0;
    // 2. bubble down

    while (currentIdx < this.values.length - 2) {
      var leftIdx = 2 * currentIdx + 1;
      var rightIdx = 2 * currentIdx + 2;
      var current = this.values[currentIdx];
      var left = this.values[leftIdx];
      var right = this.values[rightIdx];
      if (current < left && current < right) {
        if (left > right) {
          this.values[currentIdx] = left;
          this.values[leftIdx] = current;
          currentIdx = leftIdx;
        } else {
          this.values[currentIdx] = right;
          this.values[rightIdx] = current;
          currentIdx = rightIdx;
        }
      } else if (current < left) {
        this.values[currentIdx] = left;
        this.values[leftIdx] = current;
        currentIdx = leftIdx;
      } else if (current < right) {
        this.values[currentIdx] = right;
        this.values[rightIdx] = current;
        currentIdx = rightIdx;
      } else {
        return root;
      }
    }
  }
}

var heap = new MaxBinaryHeap([41, 39, 33, 18, 27, 12]);
heap.extractMax();

console.log("🔺", heap);
// 41, 39, 33, 18, 27, 12, 55
// 0   1   2   3   4   5   6

// 41, 39, 55, 18, 27, 12, 33
// 0   1   2   3   4   5   6
