/**
 * A collction of data where
 * - the first thing you add is the last thing to be removed
 * - and the last thing you add is the first thing to remove
 * LIFO: Last in first out
 * - All a stack need is push and pop methods
 * - they both should be O(1)
 * - Hint: we can use shift and unshift of SLL
 * 🐉: why not push and pop
 * pop is O(n)
 */
class StackNode {
  value: any;
  next: StackNode;

  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}

export default class Stack {
  first: StackNode;
  last: StackNode;
  size: number;

  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value: any) {
    // create a new node with the value
    var node = new StackNode(value);
    // if the stack is empty, set first and last to the new node
    if (this.size == 0) {
      this.first = node;
      this.last = node;
    } else {
      // else, set first to be the new node,
      node.next = this.first;
      // set first's next to be the old first node
      this.first = node;
    }

    this.size++;
    return this;
  }

  pop() {
    // if node is empty, return undefined
    switch (this.size) {
      case 0: {
        return undefined;
      }
      case 1: {
        // if list's size = 1, set both first and last to be null
        var temp = this.first;
        this.first = null;
        this.last = null;
        this.size--;
        return temp;
      }
      default: {
        // save the first node in a temp variable
        var temp = this.first;
        // assign first to its next
        this.first = this.first.next;
        this.size--;
        // return the removed node
        return temp;
      }
    }
  }
}

/** Used
 * Function invokations
 * Undo / Redo. When you do something in Photoshop, it gets added on top, then Ctrl + z
 */

/** Notes
 * stacks can be implemented with arrays
 * but usually implemented with SSL
 * All a stack need is a
 */
