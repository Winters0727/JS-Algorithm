const LIS = (set) => {
  const getIndexArray = (array, maxLength) => {
    return array
      .map((length, index) => {
        return { length, index };
      })
      .filter(({ length, index }) => length === maxLength)
      .map(({ length, index }) => index);
  };

  const length = set.length;
  const lengthArray = Array(length).fill(1);

  for (let i = 1; i < length; i++) {
    for (let j = 0; j < i; j++) {
      if (set[i] >= set[j]) {
        lengthArray[i] = Math.max(lengthArray[i], lengthArray[j] + 1);
      }
    }
  }

  const maxLength = Math.max(...lengthArray);
  const maxIndexes = getIndexArray(lengthArray, maxLength);
  const answer = [];

  while (maxIndexes.length > 0) {
    const maxIndex = maxIndexes.pop();
    const stack = [[maxLength, maxIndex, [set[maxIndex]]]];

    while (stack.length > 0) {
      const [length, currentIndex, sequence] = stack.pop();

      if (length === 1) {
        answer.push(sequence);
        continue;
      }

      const indexArray = getIndexArray(lengthArray, length - 1);
      indexArray.forEach((index) => {
        if (index < currentIndex && set[index] < sequence[0]) {
          const copiedSequence = sequence.slice();
          copiedSequence.unshift(set[index]);
          stack.push([length - 1, index, copiedSequence]);
        }
      });
    }
  }

  return answer;
};

module.exports = LIS;
