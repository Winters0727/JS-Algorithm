const Kruskal = (edge, weight) => {
  const createMST = (info) => {
    const startNode = Object.keys(info).shift();
    const stack = [startNode];
    const MSTNodes = [];
    const visited = [];

    while (stack.length > 0) {
      const node = stack.pop();
      visited.push(node);
      if (!MSTNodes.includes(node)) {
        MSTNodes.push(node);
      }
      info[node].forEach((nextNode) => {
        if (!visited.includes(nextNode)) {
          stack.push(nextNode);
        }
      });
    }

    return MSTNodes;
  };

  const nodeInfo = {};

  weight.forEach((value, index) => {
    const keys = Object.keys(nodeInfo);
    if (keys.includes(value)) {
      nodeInfo[value].push(edge[index]);
    } else {
      nodeInfo[value] = [edge[index]];
    }
  });

  const MSTEdges = [];
  const edgeInfo = {};
  const sortedWeight = weight.slice().sort();

  let minWeights = 0;

  sortedWeight.forEach((weight) => {
    nodeInfo[weight].forEach((nodes) => {
      const [nodeA, nodeB] = Array.from(nodes);
      const edgeNodes = Object.keys(edgeInfo);
      const MSTNodes = edgeNodes.length > 0 ? createMST(edgeInfo) : [];

      if (MSTNodes.includes(nodeA) && MSTNodes.includes(nodeB)) {
        return;
      }

      MSTEdges.push(nodes);
      minWeights += weight;
      if (!edgeNodes.includes(nodeA)) {
        edgeInfo[nodeA] = [nodeB];
      } else {
        edgeInfo[nodeA].push(nodeB);
      }

      if (!edgeNodes.includes(nodeB)) {
        edgeInfo[nodeB] = [nodeA];
      } else {
        edgeInfo[nodeB].push(nodeA);
      }
    });
  });

  return [MSTEdges, minWeights];
};

module.exports = Kruskal;
