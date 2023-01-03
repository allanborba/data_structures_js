const Graph = require("./graph");

class Digraph extends Graph {
  addEdge(value1, value2, weight = 1) {
    if(this._isInvalidValue(value1) || this._isInvalidValue(value2)) return;
    if(this._isInvalidWeight(weight)) return;

    this.adjacentList[value1].push({[value2]: weight});
  };
};

module.exports = Digraph;
