const DoublyLinkedList = require('../src/doubly_linked_list');

describe('DoublyLinkedList', () => {
  let doublyLinkedList;
  beforeEach(() => doublyLinkedList = new DoublyLinkedList(5))

  describe('#constructor', () => {
    test('create the list with de argument value', () => {
      expect(doublyLinkedList.head.next).toBe(null);
      expect(doublyLinkedList.head.value).toBe(5);
      expect(doublyLinkedList.tail.value).toBe(5);
    });
  });

  describe('#append', () => {
    test('insert an item at the end', () => {
      doublyLinkedList.append(15);

      const head = doublyLinkedList.head;
      const tail = doublyLinkedList.tail;
      const nextNode = head.next;
      const beforeNode = nextNode.before;

      expect(head.value).toBe(5);
      expect(nextNode.value).toBe(15);
      expect(beforeNode.value).toBe(5);
      expect(tail.value).toBe(15);
    });
  });

  describe('#prepend', () => {
    test('insert an item at the beginning', () => {
      doublyLinkedList.prepend(1);

      const head = doublyLinkedList.head;
      const tail = doublyLinkedList.tail;
      const nextNode = head.next;
      const beforeNode = nextNode.before;

      expect(head.value).toBe(1);
      expect(nextNode.value).toBe(5);
      expect(beforeNode.value).toBe(1);
      expect(tail.value).toBe(5);
    });
  });

  describe('#pop', () => {
    test('linked list with more than one item', () => {
      doublyLinkedList.append(15);
      doublyLinkedList.pop();

      const head = doublyLinkedList.head;
      const tail = doublyLinkedList.tail;
      const nextNode = head.next;

      expect(head.value).toBe(15);
      expect(nextNode).toBe(null);
      expect(tail.value).toBe(15);
    });
    test('linked list with one item', () => {
      doublyLinkedList.pop();

      const head = doublyLinkedList.head;
      const tail = doublyLinkedList.tail;

      expect(head).toBe(null);
      expect(tail).toBe(null);
    });
  });

  describe('#reverse', () => {
    test('invert the itens of the linked list', () => {
      doublyLinkedList.append(10);
      doublyLinkedList.append(15);
      doublyLinkedList.reverse();

      const head = doublyLinkedList.head;
      const tail = doublyLinkedList.tail;
      const nextNode = head.next;
      const beforeNode = nextNode.before;

      expect(head.value).toBe(15);
      expect(nextNode.value).toBe(10);
      expect(beforeNode.value).toBe(5);
      expect(tail.value).toBe(5);
    });
  });

  describe('#findByIndex', () => {
    test('return the item in the index', () => {
      doublyLinkedList.append(10);
      doublyLinkedList.append(15);

      expect(doublyLinkedList.findByIndex(0).value).toBe(5);
      expect(doublyLinkedList.findByIndex(1).value).toBe(10);
      expect(doublyLinkedList.findByIndex(2).value).toBe(15);
    });
  });

  describe('#insert', () => {
    beforeEach(() => {
      doublyLinkedList.append(15);
      doublyLinkedList.append(20);
    });

    test('in the middle', () => {
      doublyLinkedList.insert(1, 10);

      const head = doublyLinkedList.head;
      const tail = doublyLinkedList.tail;
      const nextNode = head.next;

      expect(head.value).toBe(5);
      expect(nextNode.value).toBe(10);
      expect(tail.value).toBe(20);
    });

    test('at start', () => {
      doublyLinkedList.insert(0, 1);

      const head = doublyLinkedList.head;
      const tail = doublyLinkedList.tail;
      const nextNode = head.next;

      expect(head.value).toBe(1);
      expect(nextNode.value).toBe(5);
      expect(tail.value).toBe(20);
    });

    test('at end', () => {
      const lastIndex = doublyLinkedList.length - 1;
      doublyLinkedList.insert(lastIndex, 25);

      const head = doublyLinkedList.head;
      const tail = doublyLinkedList.tail;
      const nextNode = head.next;

      expect(head.value).toBe(5);
      expect(nextNode.value).toBe(15);
      expect(tail.value).toBe(25);
    });

    test('invalid index', () => {
      doublyLinkedList.insert('a', 25);

      const head = doublyLinkedList.head;
      const tail = doublyLinkedList.tail;
      const nextNode = head.next;

      expect(head.value).toBe(5);
      expect(nextNode.value).toBe(15);
      expect(tail.value).toBe(20);
    });
  });

  describe('#remove', () => {
    beforeEach(() => {
      doublyLinkedList.append(15);
      doublyLinkedList.append(20);
    });

    test('in the middle', () => {
      doublyLinkedList.remove(1);

      const head = doublyLinkedList.head;
      const tail = doublyLinkedList.tail;
      const nextNode = head.next;

      expect(head.value).toBe(5);
      expect(nextNode.value).toBe(20);
      expect(tail.value).toBe(20);
    });

    test('at start', () => {
      doublyLinkedList.remove(0);

      const head = doublyLinkedList.head;
      const tail = doublyLinkedList.tail;
      const nextNode = head.next;

      expect(head.value).toBe(15);
      expect(nextNode.value).toBe(20);
      expect(tail.value).toBe(20);
    });

    test('at end', () => {
      const lastIndex = doublyLinkedList.length - 1;
      doublyLinkedList.remove(lastIndex);

      const head = doublyLinkedList.head;
      const tail = doublyLinkedList.tail;
      const nextNode = head.next;

      expect(head.value).toBe(5);
      expect(nextNode.value).toBe(15);
      expect(tail.value).toBe(15);
    });

    test('invalid index', () => {
      doublyLinkedList.remove('a');

      const head = doublyLinkedList.head;
      const tail = doublyLinkedList.tail;
      const nextNode = head.next;

      expect(head.value).toBe(5);
      expect(nextNode.value).toBe(15);
      expect(tail.value).toBe(20);
    });
  });

  describe('#getList', () => {
    test('return the linked list in array', () => {
      doublyLinkedList.append(15);
      doublyLinkedList.append(20);

      expect(doublyLinkedList.getList()).toEqual([5,15,20]);
    });
  });
});
