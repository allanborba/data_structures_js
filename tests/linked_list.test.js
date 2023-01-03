const LinkedList = require('../src/linked_list');

describe('LinkedList', () => {
  let linkedList;
  beforeEach(() => linkedList = new LinkedList(5))

  describe('#constructor', () => {
    test('create the list with de argument value', () => {
      expect(linkedList.head.next).toBe(null);
      expect(linkedList.head.value).toBe(5);
      expect(linkedList.tail.value).toBe(5);
    });
  });

  describe('#append', () => {
    test('insert an item at the end', () => {
      linkedList.append(15);

      const head = linkedList.head;
      const tail = linkedList.tail;
      const nextNode = head.next;

      expect(head.value).toBe(5);
      expect(nextNode.value).toBe(15);
      expect(tail.value).toBe(15);
    });
  });

  describe('#prepend', () => {
    test('insert an item at the beginning', () => {
      linkedList.prepend(1);

      const head = linkedList.head;
      const tail = linkedList.tail;
      const nextNode = head.next;

      expect(head.value).toBe(1);
      expect(nextNode.value).toBe(5);
      expect(tail.value).toBe(5);
    });
  });

  describe('#pop', () => {
    test('linked list with more than one item', () => {
      linkedList.append(15);
      linkedList.pop();

      const head = linkedList.head;
      const tail = linkedList.tail;
      const nextNode = head.next;

      expect(head.value).toBe(15);
      expect(nextNode).toBe(null);
      expect(tail.value).toBe(15);
    });
    test('linked list with one item', () => {
      linkedList.pop();

      const head = linkedList.head;
      const tail = linkedList.tail;

      expect(head).toBe(null);
      expect(tail).toBe(null);
    });
  });

  describe('#reverse', () => {
    test('invert the itens of the linked list', () => {
      linkedList.append(10);
      linkedList.append(15);
      linkedList.reverse();

      const head = linkedList.head;
      const tail = linkedList.tail;
      const nextNode = head.next;

      expect(head.value).toBe(15);
      expect(nextNode.value).toBe(10);
      expect(tail.value).toBe(5);
    });
    test('when the list has one item', () => {
      expect(linkedList.reverse()).toBe(undefined);
    });
  });

  describe('#findByIndex', () => {
    test('return the item in the index', () => {
      linkedList.append(10);
      linkedList.append(15);

      expect(linkedList.findByIndex(0).value).toBe(5);
      expect(linkedList.findByIndex(1).value).toBe(10);
      expect(linkedList.findByIndex(2).value).toBe(15);
      expect(linkedList.findByIndex('2')).toBe(undefined);
    });
  });

  describe('#insert', () => {
    beforeEach(() => {
      linkedList.append(15);
      linkedList.append(20);
    });

    test('in the middle', () => {
      linkedList.insert(1, 10);

      const head = linkedList.head;
      const tail = linkedList.tail;
      const nextNode = head.next;

      expect(head.value).toBe(5);
      expect(nextNode.value).toBe(10);
      expect(tail.value).toBe(20);
    });

    test('at start', () => {
      linkedList.insert(0, 1);

      const head = linkedList.head;
      const tail = linkedList.tail;
      const nextNode = head.next;

      expect(head.value).toBe(1);
      expect(nextNode.value).toBe(5);
      expect(tail.value).toBe(20);
    });

    test('at end', () => {
      const lastIndex = linkedList.length - 1;
      linkedList.insert(lastIndex, 25);

      const head = linkedList.head;
      const tail = linkedList.tail;
      const nextNode = head.next;

      expect(head.value).toBe(5);
      expect(nextNode.value).toBe(15);
      expect(tail.value).toBe(25);
    });

    test('invalid index', () => {
      linkedList.insert('a', 25);

      const head = linkedList.head;
      const tail = linkedList.tail;
      const nextNode = head.next;

      expect(head.value).toBe(5);
      expect(nextNode.value).toBe(15);
      expect(tail.value).toBe(20);
    });
  });

  describe('#remove', () => {
    beforeEach(() => {
      linkedList.append(15);
      linkedList.append(20);
    });

    test('in the middle', () => {
      linkedList.remove(1);

      const head = linkedList.head;
      const tail = linkedList.tail;
      const nextNode = head.next;

      expect(head.value).toBe(5);
      expect(nextNode.value).toBe(20);
      expect(tail.value).toBe(20);
    });

    test('at start', () => {
      linkedList.remove(0);

      const head = linkedList.head;
      const tail = linkedList.tail;
      const nextNode = head.next;

      expect(head.value).toBe(15);
      expect(nextNode.value).toBe(20);
      expect(tail.value).toBe(20);
    });

    test('at end', () => {
      const lastIndex = linkedList.length - 1;
      linkedList.remove(lastIndex);

      const head = linkedList.head;
      const tail = linkedList.tail;
      const nextNode = head.next;

      expect(head.value).toBe(5);
      expect(nextNode.value).toBe(15);
      expect(tail.value).toBe(15);
    });

    test('invalid index', () => {
      linkedList.remove('a');

      const head = linkedList.head;
      const tail = linkedList.tail;
      const nextNode = head.next;

      expect(head.value).toBe(5);
      expect(nextNode.value).toBe(15);
      expect(tail.value).toBe(20);
    });
  });

  describe('#getList', () => {
    test('return the linked list in array', () => {
      linkedList.append(15);
      linkedList.append(20);

      expect(linkedList.getList()).toEqual([5,15,20]);
    });
  });
});
