const LSS = (array) => {
  let answer = -Infinity;

  const dp = (arr) => {
    if (arr.length > 1) {
      const middle = Math.floor(arr.length / 2);
      const leftMax = dp(arr.slice(0, middle));
      const rightMax = dp(arr.slice(middle, arr.length));

      return Math.max(answer, leftMax + rightMax);
    } else {
      return arr[0];
    }
  };

  return dp(array);
};

module.exports = LSS;
