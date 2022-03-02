const PowerSet = (set) => {
  const result = [[]];
  const recur = (tempSet) => {
    const copiedSet = tempSet.slice();

    for (const [index, value] of set.entries()) {
      if (!tempSet.includes(value) && tempSet.length <= index) {
        copiedSet.push(value);
        result.push(copiedSet.slice());
        recur(copiedSet);
        copiedSet.pop();
      }
    }
  };

  recur([]);

  return result;
};

const BitPowerSet = (set) => {
  const result = [];
  const length = set.length;
  const limit = Math.pow(2, length);
  const convertToBoolean = (digit) => {
    return Array.from(digit.toString(2).padStart(length, "0")).map((value) =>
      value === "1" ? true : false
    );
  };

  let bit = 0;

  while (bit < limit) {
    const tempSet = [];
    const boolArray = convertToBoolean(bit);
    set.forEach((value, index) => {
      if (boolArray[index]) {
        tempSet.push(value);
      }
    });

    result.push(tempSet.slice());

    bit += 1;
  }

  return result;
};

module.exports = { PowerSet, BitPowerSet };
