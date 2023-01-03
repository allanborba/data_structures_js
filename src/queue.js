class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  };

  peek() {
    return this.first;
  };

  enqueue(value) {
    const node = {value, next: null};
    if(this._isEmpty()) {
      this.first = node;
    } else {
      this.last.next = node;
    };
    this.last = node;
    this.length++;
  };

  dequeue() {
    if(this._isEmpty()) return;

    if(this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next
    };
    this.length--;
  };

  _isEmpty() {
    return this.length == 0;
  };
};

module.exports = Queue;
