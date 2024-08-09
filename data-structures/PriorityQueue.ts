/**
 * A data structure where each element has a priority.
 * Elements with higher priority are served before elements with lower priority.
 *
 * just like an emergency room with one vacant bed, one at a time, and with the most severe wound
 */

/** Array implementation (naive)
 * possible, but a bit slow
 * as to find the higher priority element in an array, u would iterate the whole list
 * [5, 1, 2, 3, 9] "usually the lower, the more priority"
 */

/** Priority Queues using Heap implementation
 * Someone with Low fever 🤒 arrives, first to be added to the heap
 * 🤒
 *
 * But before he gets served, Someone with concussion 🤕 comes (more priority)
 *     🤕
 * 🤒
 *
 * Then a drunk (less priority than both)
 *     🤕
 * 🤒      🥴
 *
 * then head exlpousion (most priority)
 *         🤯
 *     🤕      🥴
 * 🤒
 *
 * Now the bed is ready, so the first one gets served (extracted out)
 *     🤕
 * 🤒      🥴
 *
 * All we care about is the top level element (min / max)
 * We always remove from the top, so there will always be a new element
 * log(n) instaed of O(n) of the array
 */

class QueueNode {
  value: any; // could be anything. What matters is the priority
  priority: number;

  constructor(value: any, priority: number) {
    this.value = value;
    this.priority = priority;
  }
}

export default class PriorityQueue {
  nodes: QueueNode[];

  constructor(nodes: QueueNode[] = []) {
    this.nodes = nodes;
  }

  /**
   * Inserts a node based on its priority
   *    2
   * 4     5
   *
   * inserting 1
   *       2
   *    4     5
   * 1
   */
  enquque(node: QueueNode) {
    // push the node at the end of the array
    this.nodes.push(node);

    // bubble up
    this.bubbleUp(node, this.nodes.length - 1);
    return this;
  }

  bubbleUp(node: QueueNode, valueIdx: number) {
    var parentIdx = Math.floor((valueIdx - 1) / 2);
    var parent = this.nodes[parentIdx];

    // base cases
    if (valueIdx == 0 || parent.priority <= node.priority) {
      return this;
    }

    this.nodes[valueIdx] = parent;
    this.nodes[parentIdx] = node;
    this.bubbleUp(node, parentIdx);
  }

  dequque() {
    var root = this.nodes[0];
    // 1. swap
    this.nodes[0] = this.nodes[this.nodes.length - 1];
    this.nodes.pop();

    // 2. bubble down
    this.bubbleDown();

    return root;
  }

  /**
   *      1
   *   2     3
   * 4  5   6  7
   */
  bubbleDown() {
    // store the index of the moving node (it's initially 0 as we swapped it)
    var currentIdx = 0;

    while (currentIdx < this.nodes.length - 1) {
      var leftIdx = 2 * currentIdx + 1;
      var rightIdx = 2 * currentIdx + 2;
      var current = this.nodes[currentIdx];
      var left = this.nodes[leftIdx];
      var right = this.nodes[rightIdx];
      var swapIdx = NaN;

      if (left && left.priority < current.priority) {
        swapIdx = leftIdx;
      }

      if (
        (right && !swapIdx && right.priority < current.priority) ||
        (right && swapIdx && right.priority < this.nodes[swapIdx].priority)
      ) {
        swapIdx = rightIdx;
      }

      if (swapIdx) {
        this.nodes[currentIdx] = this.nodes[swapIdx];
        this.nodes[swapIdx] = current;
        currentIdx = swapIdx;
      } else {
        break;
      }
    }
  }
}

const queue1 = new PriorityQueue([]);

queue1.enquque({ value: "Concussion", priority: 2 });
queue1.enquque({ value: "Low fever", priority: 4 });
queue1.enquque({ value: "Drunk", priority: 5 });
queue1.enquque({ value: "Head explosion", priority: 1 });
queue1.enquque({ value: "Low concussion", priority: 3 });

console.log("➡️", queue1);
console.log(queue1.dequque(), queue1);
console.log(queue1.dequque(), queue1);
console.log(queue1.dequque(), queue1);
console.log(queue1.dequque(), queue1);
console.log(queue1.dequque(), queue1);
