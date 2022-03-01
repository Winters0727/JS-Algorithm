const CartesianProduct = (setA, setB) => {
  if (!setA || !setB || !setA.length || !setB.length) {
    return null;
  }

  const product = [];

  for (const valueA of setA) {
    const row = [];
    for (const valueB of setB) {
      row.push(valueA * valueB);
    }
    product.push(row);
  }

  return product;
};

module.exports = CartesianProduct;
