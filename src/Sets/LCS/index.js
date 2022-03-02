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
        matrix[i][j] = Math.max(matrix[i][j - 1], matrix[i - 1][j]);
      }
    }
  }

  const subMaxLength = matrix[setB.length][setA.length];
  const stack = [[setA.length, setB.length, ""]];

  let answer = null;

  while (stack.length > 0) {
    const [x, y, string] = stack.pop();

    if (string.length === subMaxLength) {
      answer = [string, subMaxLength];
      break;
    }

    if (x > 0 && y > 0) {
      if (arrayA[x - 1] === arrayB[y - 1]) {
        stack.push([x - 1, y - 1, arrayA[x - 1] + string]);
      } else {
        if (matrix[y][x] === matrix[y - 1][x]) {
          stack.push([x, y - 1, string]);
        }
        if (matrix[y][x] === matrix[y][x - 1]) {
          stack.push([x - 1, y, string]);
        }
      }
    }
  }

  return answer;
};

module.exports = LCS;
