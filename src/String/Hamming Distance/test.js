const HammingDistance = require("./index");

console.log(HammingDistance("karolin", "kathrin")); // 3
console.log(HammingDistance("1011101", "1001001")); // 2

console.log(HammingDistance("hello", "hell")); // error
console.log(HammingDistance("12345", 12345)); // error
