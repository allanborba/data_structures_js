class BinaryTree {
  constructor() {
    this.root = null;
  };

  insert(value) {
    if(!this.root) {
      this.root = this._createNode(value);
      return;
    };

    const newNode = this._createNode(value);
    const node = this._traverseTo(value);

    if(node.value > value) node.left = newNode;
    else node.right = newNode;
  };

  lookup(value) {
    const node = this._traverseTo(value);

    return node.value == value ? node : null;
  };

  breadthFirstSearch() {
    let currentNode = this.root;
    let list = [];
    let queue = [];

    queue.push(currentNode);

    while(queue.length > 0) {
      currentNode = queue.shift();
      list.push(currentNode.value);

      if(currentNode.left) queue.push(currentNode.left);
      if(currentNode.right) queue.push(currentNode.right);
    };

    return list;
  };

  depthFirstSearch(node = this.root, list = [], order) {
    list.push(node.value);
    if(node.left) this.depthFirstSearch(node.left, list);

    if(node.right) this.depthFirstSearch(node.right, list);

    return list;
  };

  _traverseTo(value) {
    let node = this.root;

    while(node.value != value) {
      if(value > node.value) {
        if(node.right) {
          node = node.right;
          continue;
        };
      } else {
        if(node.left) {
          node = node.left;
          continue;
        };
      };
      break;
    };

    return node;
  };

  _createNode(value) {
    return {value, right: null, left: null};
  };
};

module.exports = BinaryTree;
