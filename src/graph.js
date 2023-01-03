class Graph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {};
    this.vertex = []
  };

  addVertex(value) {
    this.adjacentList[value] = [];
    this.numberOfNodes++;
    this.vertex.push(value)
  };

  addEdge(value1, value2, weight = 1) {
    if(this._isInvalidValue(value1) || this._isInvalidValue(value2)) return;
    if(this._isInvalidWeight(weight)) return;

    this.adjacentList[value1].push({[value2]: weight});
    this.adjacentList[value2].push({[value1]: weight});
  };

  _isInvalidValue(value) {
    return !Array.isArray(this.adjacentList[value]);
  };

  _isInvalidWeight(weight) {
    return typeof weight !== 'number';
  };
};

module.exports = Graph
