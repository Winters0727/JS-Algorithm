const LCS = require("./index");

console.log(LCS("abcdaf", "acbcf")); // ["abcf", 4]
console.log(LCS("ABCDGH", "AEDFHR")); // ["ADH", 3]
console.log(LCS("AGGTAB", "GXTXAYB")); // ["GTAB", 4]
