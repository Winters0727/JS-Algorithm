const LCS = (setA, setB) => {
  const matrix = Array(setB.length + 1)
    .fill(0)
    .map(() => Array(setA.length + 1).fill(0));

  const arrayA = Array.from(setA);
  const arrayB = Array.from(setB);

  for (let i = 1; i < setB.length + 1; i++) {
    for (let j = 1; j < setA.length + 1; j++) {
      if (arrayA[j - 1] === arrayB[i - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1] + 1;
      } else {
        if (i <= j) {
          matrix[i][j] = matrix[i][j - 1];
        } else {
          matrix[i][j] = matrix[i - 1][j];
        }
      }
    }
  }

  const subMaxLength = matrix[setB.length][setA.length];

  let x = setA.length;
  let y = setB.length;
  let subSequence = "";

  while (x > 0 && y > 0) {
    if (arrayA[x - 1] === arrayB[y - 1]) {
      subSequence = arrayA[x - 1] + subSequence;
      x -= 1;
      y -= 1;
    } else {
      if (x >= y) {
        x -= 1;
      } else {
        y -= 1;
      }
    }
  }

  return [subSequence, subMaxLength];
};

module.exports = LCS;
