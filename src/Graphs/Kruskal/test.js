const Kruskal = require("./index");

console.log(
  Kruskal(["ab", "ae", "bc", "be", "cd", "ce", "de"], [3, 1, 5, 4, 2, 6, 7])
); // [ [ 'ae', 'cd', 'ab', 'bc' ], 11 ]
