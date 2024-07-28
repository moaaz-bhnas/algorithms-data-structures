/**
 * Just like SLL,
 * but each node has a pointer to the previous node
 * 🐉: Can u see what a prev pointer could benefit an SSL?
 * Yup, now I can pop easily
 * Also I can walk in reverse, and I don't have to start from the beginning
 */

class ListNode {
  value: any;
  next: ListNode | null;
  prev: ListNode | null;

  constructor(value: any) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

export default class DoublyLinkedList {
  head: ListNode | null;
  tail: ListNode | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value: any) {
    // Create a new node
    var node = new ListNode(value);
    // If the list is empty, both head and tail will be assigned the new node
    if (this.length == 0) {
      this.head = node;
      this.tail = node;
    } else {
      // else, point current tail's next to the new node
      this.tail.next = node;
      // point new node's prev to current tail
      node.prev = this.tail;
      // make current tail the new node
      this.tail = node;
    }
    // increment the length
    this.length++;
  }

  pop() {
    switch (this.length) {
      // If the list is empty, return undefined
      case 0: {
        return undefined;
      }
      // If only 1 element, head & tail = null
      case 1: {
        var temp = this.head;
        this.head = null;
        this.tail = null;
        this.length--;
        return temp;
      }
      default: {
        // else, get 2nd to last element
        // set its next to null
        // Set tail to it
        var temp = this.tail;
        this.tail = temp.prev;
        this.tail.next = null;
        this.length--;
        return temp;
      }
    }
  }

  shift() {
    switch (this.length) {
      // If the list is empty, return undefined
      case 0: {
        return undefined;
      }
      // If only 1 element, head & tail = null
      case 1: {
        var temp = this.head;
        this.head = null;
        this.tail = null;
        this.length--;
        return temp;
      }
      default: {
        // else, get 2nd to last element
        // set its prev to null
        // Set head to it
        var temp = this.head; // to be returened later
        this.head = this.head.next;
        this.head.prev = null;
        this.length--;
        return temp;
      }
    }
  }

  /**
   * 2, 3
   */
  unshift(value: any) {
    var node = new ListNode(value);
    switch (this.length) {
      // If the list is empty, return undefined
      case 0: {
        this.head = node;
        this.tail = node;
        return this;
      }

      default: {
        // Link current head's prev to new node
        this.head.prev = node;
        // Link new node's next to current head
        node.next = this.head;
        // Make new node the head
        this.head = node;

        return this;
      }
    }
  }

  get(index: number) {
    // return undefined if the list is empty
    if (this.length == 0) {
      return undefined;
    }

    // Check whether u should start from the head / tail
    var fromHead = index <= this.length / 2;

    // create a result variant that starts with head
    var node;

    if (fromHead) {
      node = this.head;
      // Start a loop that stops when the counter reaches index
      for (let i = 0; i < index; i++) {
        // assign result to node.next
        node = node.next;
      }
    } else {
      node = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        // assign result to node.next
        node = node.next;
      }
    }
    return node;
  }

  set(index: number, value: any) {
    var node = this.get(index);
    if (node) {
      node.value = value;
      return true;
    } else {
      return false;
    }
  }

  // 1, 2, 4
  insert(index: number, value: any) {
    if (index < 0 || index > this.length) {
      return false;
    }

    if (index == 0) {
      this.unshift(value);
      return true;
    }

    if (index == this.length) {
      this.push(value);
      return true;
    }

    // create a new node with the value
    var newNode = new ListNode(value);
    // get node at that index
    var nodeAtIndex = this.get(index);
    // get node at index + 1
    var nodeBefore = this.get(index - 1);

    // set node1's next to new node
    nodeAtIndex.prev = newNode;
    // set node2's prev to new node
    nodeBefore.next = newNode;
    // set new node's next and prev
    newNode.next = nodeAtIndex;
    newNode.prev = nodeBefore;
    this.length++;
    return true;
  }

  remove(index: number) {
    if (index < 0 || index > this.length) {
      return false;
    }

    if (index == 0) {
      this.shift();
      return true;
    }

    if (index == this.length - 1) {
      this.pop();
      return true;
    }

    // get node after and set its prev to its prev's prev
    var nodeAfter = this.get(index + 1);
    nodeAfter.prev = nodeAfter.prev.prev;
    // get node before and set its next to it's next's next
    var nodeBefore = this.get(index - 1);
    nodeBefore.next = nodeBefore.next.next;
    this.length--;
    return true;
  }
}

var list = new DoublyLinkedList();

list.push("Harry");
list.push("Potter");
list.push("Ron");
list.push("Weasly");
// console.log("after push", list);

// list.remove(4);
list.remove(3);
console.log(list);

// list.pop();
// list.pop();
// console.log("after pop", list);

// list.shift();
// list.shift();
// console.log("after shift", list);

/** Big O
 * Insertion O(1)
 * Removal O(1):
 * Searching O(n)
 * Access O(n)
 * Technically searching and accessing is O(n/2) as u can choose where you start searching
 */

/** Recap
 * Good for things where u need to go back like browser history
 * If I'm on a web page, I could go to next / prev pages
 */
