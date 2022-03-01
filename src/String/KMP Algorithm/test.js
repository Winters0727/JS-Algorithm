const KMPAlgorithm = require("./index");

console.log(KMPAlgorithm("abxabcabcaby", "abcaby")); // 6
console.log(KMPAlgorithm("CTCACTGCCTGCCTAG", "CTGCCTAG")); // 8
console.log(KMPAlgorithm("ABCDCBA", "QWERTY")); // -1
