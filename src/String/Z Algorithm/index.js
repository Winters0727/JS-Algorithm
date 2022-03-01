const ZAlogirthm = (text, pattern) => {
  const createZArray = (text) => {
    const textArray = Array.from(text);
    const ZArray = ["X"];
    const length = textArray.length;

    for (let i = 1; i < length; i++) {
      let counter = 0;
      for (let j = 0; j < length - i; j++) {
        if (textArray[j % i] === textArray[i + j]) {
          counter += 1;
        } else {
          break;
        }
      }
      ZArray.push(counter);
    }

    return ZArray;
  };

  const concatText = `${pattern}$${text}`;
  const patternLength = pattern.length;
  const ZArray = createZArray(concatText);

  const answer = [];

  ZArray.forEach((value, index) => {
    if (value === patternLength) {
      answer.push(index - (patternLength + 1));
    }
  });

  return answer;
};

module.exports = ZAlogirthm;
