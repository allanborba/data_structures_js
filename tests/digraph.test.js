const Digraph = require('../src/digraph');

describe('Digraph', () => {
  let digraph;
  beforeEach(() => digraph = new Digraph());

  describe('#addVertex', () => {
    test('add vertex to digraph', () => {
      digraph.addVertex('a')

      expect(digraph.adjacentList['a']).toEqual([]);
      expect(digraph.numberOfNodes).toBe(1);
    });
  });
  describe('#addEdge', () => {
    beforeEach(() => {
      digraph.addVertex('a');
      digraph.addVertex('b');
    });

    test('when the value is invalid', () => {
      digraph.addEdge('a', 'c')

      expect(digraph.adjacentList['a']).toEqual([]);
      expect(digraph.adjacentList['b']).toEqual([]);
      expect(digraph.adjacentList['c']).toEqual(undefined);
    });
    test('when the weight is invalid', () => {
      digraph.addEdge('a', 'b', '1')

      expect(digraph.adjacentList['a']).toEqual([]);
      expect(digraph.adjacentList['b']).toEqual([]);
    });
    test('when no weight is passed on the argument', () => {

      digraph.addEdge('a','b')

      expect(digraph.adjacentList['a']).toEqual([{'b': 1}]);
      expect(digraph.adjacentList['b']).toEqual([]);
    });
    test('when valid weight is passed on the argument', () => {

      digraph.addEdge('a','b', 10)

      expect(digraph.adjacentList['a']).toEqual([{'b': 10}]);
      expect(digraph.adjacentList['b']).toEqual([]);
    });
  });
});
