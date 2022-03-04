const Knapsack = (items, values, bagSize) => {
  const itemLength = items.length;
  const matrix = Array(itemLength + 1)
    .fill(0)
    .map(() => Array(bagSize + 1).fill(0));

  for (let i = 1; i < itemLength + 1; i++) {
    for (let j = 1; j < bagSize + 1; j++) {
      if (j < items[i - 1]) {
        matrix[i][j] = matrix[i - 1][j];
      } else {
        matrix[i][j] = Math.max(
          values[i - 1] + matrix[i - 1][j - items[i - 1]],
          matrix[i - 1][j]
        );
      }
    }
  }

  const answer = [];

  let x = bagSize;
  let y = itemLength;

  while (y > 1) {
    if (matrix[y][x] !== matrix[y - 1][x]) {
      answer.unshift(items[y - 1]);
      x -= items[y - 1];
    }
    y -= 1;
  }

  return answer;
};

module.exports = Knapsack;
