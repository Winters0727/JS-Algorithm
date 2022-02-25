const createPrimeArray = require("./index");

const isPrime = createPrimeArray(100);

const testArray = Array(10)
  .fill(0)
  .map((value, index) => index + 2);

testArray.forEach((value) => console.log(value, isPrime(value)));
