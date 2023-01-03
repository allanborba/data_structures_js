const LinkedList = require("./linked_list");

class DoublyLinkedList extends LinkedList{
	append(value) {
		const lastNode = this._createNode(value, null, this.tail);
		this.tail.next = lastNode;
		this.tail = lastNode;
	};

  prepend(value) {
    const newHead = this._createNode(value, this.head, null);
    this.head.before = newHead;
    this.head = newHead;
  };

  pop() {
    super.pop();
    if(this.length > 0) this.head.before = null
  };

  insert(index, value) {
    if(this._isInvalidIndexArgument(index)) return;

    if(index === 0) {
      this.prepend(value);
      return
    };
    if(index === this.length - 1) {
      this.append(value);
      return
    };

    const beforeNode = this.findByIndex(index - 1);
    const afterNode = beforeNode.next
    const newNode = this._createNode(value, afterNode, beforeNode);
    beforeNode.next = newNode;
    afterNode.before = newNode;
  };

  remove(index){
    if(this._isInvalidIndexArgument(index)) return;

    if(index === 0){
      this.pop()
      return
    }

    const beforeNode = this.findByIndex(index - 1);
    const nodeToRemove = beforeNode.next
    const afterNode = nodeToRemove.next
    beforeNode.next = afterNode;

    if(index === this.length -1) this.tail = beforeNode
    else afterNode.before = beforeNode;

    this.length--;
  };

  _createNode(value, next = null, before = null) {
    this.length++;
		return {value, next, before};
	};

};

module.exports = DoublyLinkedList;