class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  };

  peek() {
    return this.top;
  };

  push(value) {
    const node = {value, next: null};
    if(this._isEmpty()) this.bottom = node;
    else node.next = this.top;

    this.top = node;
    this.length++;
  };

  pop() {
    if(this._isEmpty()) return;

    if(this.length == 1) {
      this.top = null;
      this.bottom = null;
    } else {
      this.top = this.top.next
      };

    this.length--;
  };

  _isEmpty() {
    return this.length == 0;
  };
};

module.exports = Stack;
