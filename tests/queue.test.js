const Queue = require('../src/queue');

describe('Queue', () => {
  let queue;
  beforeEach(() => queue = new Queue());

  describe('#enqueue', () => {
    test('when the queue is empty', () => {
      queue.enqueue(5);

      const first = queue.first;
      const last = queue.last;

      expect(first.value).toBe(5);
      expect(last.value).toBe(5);
      expect(queue.length).toBe(1);
    });
    test('when the queue is not empty', () => {
      queue.enqueue(5);
      queue.enqueue(10);

      const first = queue.first;
      const last = queue.last;

      expect(first.value).toBe(5);
      expect(last.value).toBe(10);
      expect(queue.length).toBe(2);
    });
  });

  describe('#dequeue', () => {
    test('when the queue is empty', () => {
      expect(queue.dequeue()).toBe(undefined);
      expect(queue.length).toBe(0);
    });
    test('when the queue has one item', () => {
      queue.enqueue(5);
      queue.dequeue();

      const first = queue.first;
      const last = queue.last;

      expect(first).toBe(null);
      expect(last).toBe(null);
      expect(queue.length).toBe(0);
    });
    test('when the queue has more than one item', () => {
      queue.enqueue(5);
      queue.enqueue(10);
      queue.dequeue();

      const first = queue.first;
      const last = queue.last;

      expect(first.value).toBe(10);
      expect(last.value).toBe(10);
      expect(queue.length).toBe(1);
    });
  });

  describe('#peek', () => {
    test('when the queue has one item', () => {
      queue.enqueue(5);

      expect(queue.peek().value).toBe(5)
    });
    test('when the queue has more than one item', () => {
      queue.enqueue(5);
      queue.enqueue(10);

      expect(queue.peek().value).toBe(5)
    });
  });
});
