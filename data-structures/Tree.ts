/**
 * 🐉: What's a tree?
 * A data structure that consists of nodes in a parent / child relationship
 * - We end up with branches, so one node can connect to 1 or 10 nodes, or 0
 */

import { Queue } from "./Queues";

/** Lists x Trees
 * Lists => linear
 * Trees => nonlinear
 * - you can think of SLL as a special case of tree (one branch)
 */

/** Rules
 * 1- A node can only reference a child, not parent or sibling
 * a => b
 * a => c
 * b can't reference c
 * 2. you can only have one root
 */

/** Are they any useful?
 * - HTML DOM?
 * - Abstract syntax tree
 * compiler code know that you can use return only inside function
 * and break only inside for, while, etc.
 * by a tree structure (https://en.wikipedia.org/wiki/Abstract_syntax_tree)
 * حاجات تانية مش فاهمها
 * Maybe chess engines? (not true, after learning about graphs, it's graphs)
 */

/** Kinds of trees
 * There's a whole lot, but we're gonna focus on:
 * Trees
 *     Binary trees
 *         Binary search trees
 */

/** Binary trees
 * - Each node can have at most 2 children (maybe 1 or 0)
 * - They have some special properties that make them easy to navigate
 */

/** Binary search trees
 * - A special case of binary trees
 * - they are sorted in a particualr way
 * - used to store comparable data (mainly numbers)
 * - every node to the left of a parent is always less than the parent
 * - every node to the right is grater that the parent
 * - this makes it much easier to search
 */

class TreeNode {
  value: number;
  left: TreeNode;
  right: TreeNode;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export default class Tree {
  root: TreeNode;

  constructor() {
    this.root = null;
  }

  /**    4
   *  2     6
   * 1  3  5  7
   */

  insert(value: number, current = this.root): Tree {
    // Create a new node
    var newNode = new TreeNode(value);

    // no root? now we have one
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    if (value == current.value) {
      return this;
    }

    if (value < current.value) {
      if (!current.left) {
        current.left = newNode;
        return this;
      } else {
        return this.insert(value, current.left);
      }
    } else {
      if (!current.right) {
        current.right = newNode;
        return this;
      } else {
        return this.insert(value, current.right);
      }
    }
  }

  find(value: number, current = this.root): TreeNode | undefined {
    // 1. If no root, return undefined
    if (!this.root) {
      return undefined;
    }

    if (value == current.value) {
      return current;
    }

    if (value < current.value) {
      if (!current.left) return undefined;
      return this.find(value, current.left);
    } else {
      if (!current.right) return undefined;
      return this.find(value, current.right);
    }
  }

  BFS(queue = new Queue(this.root), result: TreeNode[] = []): TreeNode[] {
    if (queue.size == 0) {
      return result;
    }

    var node = queue.dequeue();
    result.push(node.value);
    if (node.value.left) queue.enqueue(node.value.left);
    if (node.value.right) queue.enqueue(node.value.right);
    return this.BFS(queue, result);

    // var queue = new Queue();
    // var result: TreeNode[] = [];
    // if (!this.root) {
    //   return result;
    // }
    // queue.enqueue(this.root);
    // while (queue.size > 0) {
    //   var node = queue.dequeue();
    //   result.push(node.value);
    //   if (node.value.left) queue.enqueue(node.value.left);
    //   if (node.value.right) queue.enqueue(node.value.right);
    // }
    // return result;
  }

  /**
   * Look below for traversal explanation
   */

  /**
   * 1. visit node,
   * 2. traverse left
   * 3. traverse right
   */
  DFSPreOrder(current = this.root, result: number[] = []) {
    if (!this.root) {
      return result;
    }

    result.push(current.value);
    if (current.left) {
      result = this.DFSPreOrder(current.left, result);
    }
    if (current.right) {
      result = this.DFSPreOrder(current.right, result);
    }
    return result;
  }

  /**
   * 1. traverse left
   * 2. traverse right
   * 3. visit node,
   */
  DFSPostOrder(current = this.root, result: number[] = []) {
    if (!this.root) {
      return result;
    }

    if (current.left) {
      result = this.DFSPostOrder(current.left, result);
    }
    if (current.right) {
      result = this.DFSPostOrder(current.right, result);
    }
    result.push(current.value);
    return result;
  }

  /**
   * 1. traverse left
   * 2. visit node,
   * 3. traverse right
   */
  DFSInOrder(current = this.root, result: number[] = []) {
    if (!this.root) {
      return result;
    }

    if (current.left) {
      result = this.DFSInOrder(current.left, result);
    }
    result.push(current.value);
    if (current.right) {
      result = this.DFSInOrder(current.right, result);
    }
    return result;
  }
}

var tree = new Tree();
tree.insert(4);
tree.insert(2);
tree.insert(6);
tree.insert(1);
tree.insert(7);
tree.insert(5);
tree.insert(5);
tree.insert(3);

/**
 *     4
 *   2    6
 * 1  3  5   7
 */

console.log("🌲", tree);
console.log("🔎", tree.find(9));
console.log("➡️", tree.BFS());
// console.log("⬇️", tree.DFSPreOrder());
// console.log("⬇️", tree.DFSPostOrder());
console.log("⬇️", tree.DFSInOrder());

/** Big O of BST
 * Inserting log(n)
 * Searching log(n)
 * 🐉 How?
 * If you double the nodes, you get one more iteration
 *   10
 * 8    12
 * Searching for 12 here is 2 iterations
 *       10
 *   8      12
 * 7   9  11    13
 * Searching for 13 here is 3 iterations
 */

/** Worst case is O(n)
 * 1
 *   2
 *     3
 *       4
 */

/**
 * Tree traversal
 * There are two main ways for traversing a tree
 */

/** Breadth first search BFS
 * Starts at the beginning, then works across the tree
 * every sibling node before we look for a child
 * ==>       10
 * ==>   8      12
 * ==> 7   9  11    13
 * 10 > 8 > 12 > 7 > 9 > 11 > 13
 */

/** Depth first search DFS
 * It has three main orders
 */

/** DFS InOrder
 *       10
 *   8      12
 * 7   9  11    13
 *
 * 7 > 8 > 9 > 10 > 11 > 12 > 13
 */

/** DFS PreOrder
 *       10
 *   8      12
 * 7   9  11    13
 *
 * 10 > 8 > 7 > 9 > 12 > 11 > 13
 */

/** DFS PostOrder
 *       10
 *   8      12
 * 7   9  11    13
 *
 * 7 > 9 > 8 > 11 > 13 > 12 > 10
 */

/** BFS vs DFS
 * time complexity is irrelevant. We're visiting each node once "O(n)"
 * - If the tree is very (wide), BFS won't be the best option as a queue is used to store all the horizontal nodes
 * - However, in a tree that's
 * 1
 *   2
 *     3
 * BFS's queue will store one node at a time, so it's better as DFS has a new call stack for each level
 */

/** DFS variants
 * Instructor didn't have much to say 😅
 * DFS preOrder: might be useful if you want to store the result in a DB to re-create it later as it gives the nodes in an order ready to be inserted
 */
