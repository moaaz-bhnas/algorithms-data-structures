/**
 * A list data structure where you add data in / remove data out
 * - FIFO: First in, first out
 * - LOL queue?
 * - resources upload
 * - print queue
 * we're gonna use push and unshift from SSL as they're both O(1)
 */

export class QueueNode {
  value: any;
  next: QueueNode | null;

  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}

export class Queue {
  first: QueueNode;
  last: QueueNode;
  size: number;

  constructor(value?: any) {
    this.first = value ? new QueueNode(value) : null;
    this.last = null;
    this.size = value ? 1 : 0;
  }

  enqueue(value: any) {
    var node = new QueueNode(value);
    if (this.size == 0) {
      this.first = node;
      this.last = node;
    } else {
      // set last's next to new node
      this.last.next = node;
      // set last to be new node
      this.last = node;
    }
    this.size++;
    return this;
  }

  dequeue() {
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

var queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue();

console.log("🐉", queue);
