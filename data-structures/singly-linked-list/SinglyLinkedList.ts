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

  push(value: any): SinglyLinkedList {
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

  pop(): ListNode | undefined {
    // If the list is empty, return undefined
    if (!this.head) return undefined;
    // Loop through the list until u reach the tail
    let current = this.head;
    let temp = current;
    while (current.next) {
      // Make sure temp is always lagging by one node behind
      temp = current;
      current = current.next;
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

  shift(): ListNode | undefined {
    // If the list is empty, return undefined
    if (!this.head) return undefined;
    // Store the current head in a variable
    const oldHead = this.head;
    // Set the head to be the current head's next
    this.head = oldHead.next;
    // Decrement the length by 1
    this.length--;
    // If there's only one node, set the tail too to be null
    if (this.length === 0) {
      this.tail = null;
    }
    // Return the node removed
    return oldHead;
  }

  unshift(value: any): SinglyLinkedList {
    // create new node with the passed value
    const node = new ListNode(value);
    // Set both head and tail to be the newly-created node if the list is empty
    if (!this.head) {
      this.head = node;
      this.tail = node;
    }
    // otherwise set the head to the new node, and set new node's next property to the old head
    else {
      node.next = this.head;
      this.head = node;
    }
    // increment the length by 1
    this.length++;
    // return the list
    return this;
  }

  get(index: number): ListNode | undefined {
    // If the array is empty or the index is equal or larger than length, return undefined
    // !this.head only for ts
    if (index < 0 || index >= this.length || !this.head) return undefined;
    // Otherwise, loop through the list till reaching the node at the index wanted
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      if (currentNode.next) currentNode = currentNode.next;
    }
    return currentNode;
  }

  set(index: number, value: any): boolean {
    // get the node at the specified index
    const nodeToChange = this.get(index);
    // if it's undefined, return false
    if (!nodeToChange) return false;
    // Otherwise, set its value to the passed one and return true
    nodeToChange.value = value;
    return true;
  }

  insert(index: number, value: any): boolean {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) {
      this.push(value);
      return true;
    }
    if (index === 0) {
      this.unshift(value);
      return true;
    }
    // otherwise, create a new node
    // and set the new node's next to the found node's next, and set the found node's next to the new node
    const newNode = new ListNode(value);
    const prev = this.get(index - 1);
    if (prev && prev.next) {
      // just for ts
      newNode.next = prev.next;
      prev.next = newNode;
    }
    this.length++;
    return true;
  }
}

const list = new SinglyLinkedList();

list.unshift("Killua");
list.push("Zoldyck");
console.log({ list });

list.pop();
list.shift();
console.log({ list });

list.unshift("Maha");
list.push("Zoldyck");
console.log(list.get(-1));

list.set(0, "Illumi");
list.insert(2, "family");
console.log(list);
