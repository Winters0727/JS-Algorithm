const createPrimeArray = (maxNumber) => {
  const primeArray = Array(maxNumber + 1).fill(true);
  primeArray[0] = false;
  primeArray[1] = false;

  const maxSqrtNumber = Math.floor(Math.pow(maxNumber, 0.5));

  for (let i = 2; i <= maxSqrtNumber; i++) {
    let index = 2 * i;
    while (index <= maxNumber) {
      if (primeArray[index]) {
        primeArray[index] = false;
      }

      index += i;
    }
  }
  console.log(primeArray);
  return (number) => primeArray[number];
};

module.exports = createPrimeArray;
