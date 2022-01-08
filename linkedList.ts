class LinkedListNode {
  next: LinkedListNode;
  element: number;

  constructor(element: number) {
    this.next = null;
    this.element = element;
  }
}

class LinkedList {
  head: LinkedListNode;
  size: number;
  currentNode: LinkedListNode;

  constructor() {
    this.head = null;
    this.size = 0;
    this.currentNode = null;
  }

  // add El
  add(element: number) {
    const node = new LinkedListNode(element);

    if (this.head === null) {
      this.head = node;
      this.currentNode = node;
      return;
    }

    this.currentNode.next = node;
    this.currentNode = node;
  }

  // insert At El

  // remove At index

  // remove Element

  // print Els
  print() {
    let cloneHead: LinkedListNode = this.head;
    console.log(cloneHead);
    let printString: string;
    while (cloneHead !== null) {
      printString += `${cloneHead.element}-->`;
      cloneHead = cloneHead.next;
    }
    printString += `-->null`;
    console.log(printString);
  }
}

const linkedList: LinkedList = new LinkedList();
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.add(4);
linkedList.add(5);
linkedList.print();
