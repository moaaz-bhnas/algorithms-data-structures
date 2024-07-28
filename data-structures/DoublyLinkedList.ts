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
        this.head = this.head.prev;
        this.tail.next = null;
        this.length--;
        return temp;
      }
    }
  }
}

var list = new DoublyLinkedList();

list.push("Harry");
list.push("Potter");
console.log("after push", list);

list.pop();
list.pop();
console.log("after pop", list);

/** Big O
 * Insertion O(1):
 * all you do in push / unshift is that u assign head / tail
 * so SLL win over array here
 * Removal O(1):
 * Searching O(n)
 * Access O(n)
 * Technically searching and accessing is O(n/2) as u can choose where you start searching
 */

/** Recap
 * Good for things where u need to go back like browser history
 * If I'm on a web page, I could go to next / prev pages
 */
