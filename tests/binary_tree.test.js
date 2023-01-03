const BinaryTree = require('../src/binary_tree');

describe('BinaryTree', () => {
  let binaryTree;
  beforeEach(() => binaryTree = new BinaryTree());

  describe('#insert', () => {
    test('first node', () => {
      binaryTree.insert(9);

      const root = binaryTree.root;
      const left = root.left;
      const right = root.right;

      expect(root.value).toBe(9);
      expect(left).toBe(null);
      expect(right).toBe(null);
    });
    test('when the value is less than the father node', () => {
      binaryTree.insert(9);
      binaryTree.insert(4);

      const root = binaryTree.root;
      const left = root.left;
      const right = root.right;

      expect(root.value).toBe(9);
      expect(left.value).toBe(4);
      expect(right).toBe(null);
    });
    test('when the value is greater than the father node', () => {
      binaryTree.insert(9);
      binaryTree.insert(4);
      binaryTree.insert(20);

      const root = binaryTree.root;
      const left = root.left;
      const right = root.right;

      expect(root.value).toBe(9);
      expect(left.value).toBe(4);
      expect(right.value).toBe(20);
    });
  });
  describe('#lookup', () => {
    beforeEach(() => populateTree(binaryTree))

    test('when the node does not exist', () => {
      expect(binaryTree.lookup(10)).toBe(null);
    });
    test('when the node exists', () => {
      const node = {value:15, left: null, right: null}
      expect(binaryTree.lookup(15)).toEqual(node);
    });
  });
  describe('#breadthFirstSearch', () => {
    beforeEach(() => populateTree(binaryTree))

    test('return an array with values', () => {
      expect(binaryTree.breadthFirstSearch()).toEqual([9, 4, 20, 1, 6, 15, 170])
    });
  });
  describe('#depthFirstSearch', () => {
    beforeEach(() => populateTree(binaryTree))

    test('return an array with values', () => {
      expect(binaryTree.depthFirstSearch()).toEqual([9, 4, 1, 6, 20, 15, 170])
    });
  });
});

function populateTree(binaryTree) {
  binaryTree.insert(9);
  binaryTree.insert(4);
  binaryTree.insert(20);
  binaryTree.insert(15);
  binaryTree.insert(170);
  binaryTree.insert(1);
  binaryTree.insert(6);
}
