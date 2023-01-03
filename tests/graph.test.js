const Graph = require('../src/graph');

describe('Graph', () => {
  let graph;
  beforeEach(() => graph = new Graph());

  describe('#addVertex', () => {
    test('add vertex to graph', () => {
      graph.addVertex('a')

      expect(graph.adjacentList['a']).toEqual([]);
      expect(graph.numberOfNodes).toBe(1);
    });
  });
  describe('#addEdge', () => {
    beforeEach(() => {
      graph.addVertex('a');
      graph.addVertex('b');
    });

    test('when the value is invalid', () => {
      graph.addEdge('a', 'c')

      expect(graph.adjacentList['a']).toEqual([]);
      expect(graph.adjacentList['b']).toEqual([]);
      expect(graph.adjacentList['c']).toEqual(undefined);
    });
    test('when the weight is invalid', () => {
      graph.addEdge('a', 'b', '1')

      expect(graph.adjacentList['a']).toEqual([]);
      expect(graph.adjacentList['b']).toEqual([]);
    });
    test('when no weight is passed on the argument', () => {

      graph.addEdge('a','b');

      expect(graph.adjacentList['a']).toEqual([{'b': 1}]);
      expect(graph.adjacentList['b']).toEqual([{'a': 1}]);
    });
    test('when valid weight is passed on the argument', () => {

      graph.addEdge('a','b', 10);

      expect(graph.adjacentList['a']).toEqual([{'b': 10}]);
      expect(graph.adjacentList['b']).toEqual([{'a': 10}]);
    });
  });
});
