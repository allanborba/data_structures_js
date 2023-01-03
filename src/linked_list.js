class LinkedList {
  constructor(value) {
    this.length = 0;
    this.head = this._createNode(value);
    this.tail = this.head;
  };

  append(value) {
    const lastNode = this._createNode(value);
    this.tail.next = lastNode;
    this.tail = lastNode;
  };

  prepend(value) {
    const newHead = this._createNode(value, this.head);
    this.head = newHead;
  };

  pop() {
    if(this.length > 1) this.head = this.head.next;
    else {
      this.head = null;
      this.tail = null;
    }
    this.length--;
  };

  insert(index, value) {
    if(this._isInvalidIndexArgument(index)) return;

    if (index === 0) {
      this.prepend(value);
      return;
    };
    if (index === this.length - 1) {
      this.append(value);
      return;
    };

    const beforeNode = this.findByIndex(index - 1);
    const newNode = this._createNode(value, beforeNode.next);
    beforeNode.next = newNode;
  };

  remove(index) {
    if(this._isInvalidIndexArgument(index)) return;

    if (index === 0) {
      this.pop();
      return;
    }

    const beforeNode = this.findByIndex(index - 1);
    const nodeToRemove = beforeNode.next;
    const afterNode = nodeToRemove.next;
    beforeNode.next = afterNode;

    if (index === this.length - 1) {
      this.tail = beforeNode;
    };
    this.length--;
  };

  findByIndex(index) {
    if(this._isInvalidIndexArgument(index)) return;

    if(index === 0) return this.head;

    let actualIndex = 0;
    let currentNode = this.head;

    while (actualIndex < index) {
      currentNode = currentNode.next;
      actualIndex++;
    };

    return currentNode;
  };

  reverse() {
    if (this.length === 1) return;

    let first = this.head;
    let second = first.next;

    while (second) {
      let nextNode = second.next;
      second.next = first;
      first = second;
      second = nextNode;
    };

    this.tail = this.head;
    this.tail.next = null;
    this.head = first;
  };

  getList() {
    const list = [];
    let currentNode = this.head;

    for (let i = 0; i < this.length; i++) {
      list.push(currentNode.value);
      currentNode = currentNode.next;
    };
    return list;
  };

  _createNode(value, next = null) {
    this.length++;
    return { value, next };
  };

  _isInvalidIndexArgument(index) {
    return typeof index !== 'number' || index >= this.length;
  };
};

module.exports = LinkedList;