const LIS = (set) => {
  const length = set.length;
  const lengthArray = Array(length).fill(1);

  for (let i = 1; i < length; i++) {
    for (let j = 0; j < i; j++) {
      if (set[i] >= set[j]) {
        lengthArray[i] = Math.max(lengthArray[i], lengthArray[j] + 1);
      }
    }
  }

  return Math.max(...lengthArray);
};

module.exports = LIS;
