const Stack = require('../src/stack');

describe('Stack', () => {
  let stack;
  beforeEach(() => stack = new Stack());

  describe('#push', () => {
    test('when the stack is empty', () => {
      stack.push(5);

      const top = stack.top;
      const bottom = stack.bottom;

      expect(top.value).toBe(5);
      expect(bottom.value).toBe(5);
      expect(stack.length).toBe(1);
    });
    test('when the stack is not empty', () => {
      stack.push(5);
      stack.push(10);

      const top = stack.top;
      const bottom = stack.bottom;

      expect(top.value).toBe(10);
      expect(bottom.value).toBe(5);
      expect(stack.length).toBe(2);
    });
  });

  describe('#pop', () => {
    test('when the stack is empty', () => {
      expect(stack.pop()).toBe(undefined);
      expect(stack.length).toBe(0);
    });
    test('when the stack has one item', () => {
      stack.push(5);
      stack.pop();

      const top = stack.top;
      const bottom = stack.bottom;

      expect(top).toBe(null);
      expect(bottom).toBe(null);
      expect(stack.length).toBe(0);
    });
    test('when the stack has more than one items', () => {
      stack.push(5);
      stack.push(10);
      stack.pop();

      const top = stack.top;
      const bottom = stack.bottom;

      expect(top.value).toBe(5);
      expect(bottom.value).toBe(5);
      expect(stack.length).toBe(1);
    });
  });

  describe('#peek', () => {
    test('when the stack has one item', () => {
      stack.push(5);

      expect(stack.peek().value).toBe(5);
    });
    test('when the stack has more than one item', () => {
      stack.push(5);
      stack.push(10);

      expect(stack.peek().value).toBe(10);
    });
  });
});
