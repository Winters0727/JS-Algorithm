const KMPAlgorithm = (text, pattern) => {
  const createPatternTable = (pattern) => {
    const patternLength = pattern.length;

    const patternTable = Array(patternLength).fill(0);

    for (let i = 1; i < patternLength; i++) {
      if (patternTable[i - 1] === 0) {
        if (pattern[0] === pattern[i]) {
          patternTable[i] = 1;
        }
      } else {
        if (pattern[patternTable[i - 1]] === pattern[i]) {
          patternTable[i] = patternTable[i - 1] + 1;
        } else {
          if (pattern[0] === pattern[i]) {
            patternTable[i] = 1;
          }
        }
      }
    }

    return patternTable;
  };

  const length = text.length;
  const patternLength = pattern.length;
  const table = createPatternTable(pattern);

  let textIndex = 0;
  let tableIndex = 0;
  let counter = 0;
  let answer = -1;

  while (length + tableIndex - textIndex >= patternLength && answer === -1) {
    if (text[textIndex + counter] === pattern[tableIndex + counter]) {
      counter += 1;
      if (tableIndex + counter === patternLength) {
        answer = textIndex - tableIndex;
      }
    } else {
      textIndex = counter > 0 ? textIndex + counter : textIndex + 1;
      tableIndex =
        tableIndex + counter - 1 >= 0 ? table[tableIndex + counter - 1] : 0;
      counter = 0;
    }
  }

  return answer;
};

module.exports = KMPAlgorithm;
