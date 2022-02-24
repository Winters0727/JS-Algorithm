const HammingDistance = (str1, str2) => {
  if (typeof str1 !== "string" || typeof str2 !== "string") {
    throw new Error("Attributes must be string!");
  }

  if (str1.length !== str2.length) {
    throw new Error("Attributes must have same length!");
  }

  let counter = 0;

  Array.from(str1).forEach((char, index) => {
    if (char !== str2[index]) {
      counter++;
    }
  });

  return counter;
};

module.exports = HammingDistance;
