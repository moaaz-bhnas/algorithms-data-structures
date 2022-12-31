class ListNode {
  value: any;
  next: ListNode | null;

  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  head: ListNode | null;
  tail: ListNode | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value: any) {
    const node = new ListNode(value);
    if (!this.tail) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop() {
    // If the list is empty, return undefined
    if (!this.head) return undefined;
    // Loop through the list until u reach the tail
    let current = this.head;
    let temp = this.head;
    while (current.next) {
      current = current.next;
      temp = current;
    }
    // Set the 2nd to last item to be tail
    this.tail = temp;
    // Set the "next" property of the 2nd to last node to be null
    this.tail.next = null;
    // Decrement the length by 1
    this.length--;
    // If there's only one node, set the head and tail to be null
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    // Return the removed item
    return current;
  }
}

const list = new SinglyLinkedList();

list.push("Killua");
list.push("Zoldyck");
console.log({ list });

list.pop();
list.pop();
console.log({ list });
