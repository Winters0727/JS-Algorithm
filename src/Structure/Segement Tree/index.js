class Node {
  constructor(range, value, leftChild = null, rightChild = null) {
    this.range = range;
    this.value = value;
    this.children = [leftChild, rightChild];
  }
}

class SegmentTree {
  constructor(array) {
    this.array = array;
    this.length = array.length;
    this.tree = Array(this.length * 2 - 1).fill(0);

    if (this.length % 2 === 0) {
      this.tree.forEach((_, index) => {
        if (index >= this.length - 1) {
          this.tree[index] = new Node(
            [index - this.length + 1, index - this.length + 1],
            this.array[index - this.length + 1]
          );
        }
      });
    } else {
      this.tree.forEach((_, index) => {
        if (index === this.length - 1) {
          this.tree[index] = new Node([index, index], this.array[index]);
        } else if (index > this.length - 1) {
          this.tree[index] = new Node(
            [index - this.length, index - this.length],
            this.array[index - this.length]
          );
        }
      });
    }

    const used = Array(this.length * 2 - 1).fill(false);
    let index = this.length * 2 - 1;

    while (index > 0) {
      if (!used[index]) {
        const parentIndex = Math.floor((index - 2) / 2);

        const leftChildIndex = this.getLeftChildIndex(parentIndex);
        const leftChild = this.tree[leftChildIndex];
        const [leftStart, leftEnd] = leftChild.range;
        used[leftChildIndex] = true;

        const rightChildIndex = this.getRightChildIndex(parentIndex);
        const rightChild = this.tree[rightChildIndex];
        const [rightStart, rightEnd] = rightChild.range;
        used[rightChildIndex] = true;

        const range = [
          Math.min(leftStart, rightStart),
          Math.max(leftEnd, rightEnd),
        ];

        this.tree[parentIndex] = new Node(
          range,
          leftChild.value + rightChild.value,
          leftChild,
          rightChild
        );
      }
      index -= 1;
    }

    this.head = this.tree[0];
  }

  getLeftChildIndex(parentIndex) {
    return parentIndex * 2 + 1;
  }

  getRightChildIndex(parentIndex) {
    return parentIndex * 2 + 2;
  }

  printNode(node) {
    if (node) {
      console.log(node);

      const [leftChild, rightChild] = node.children;
      this.printNode(leftChild);
      this.printNode(rightChild);
    }
  }

  travelNode() {
    this.printNode(this.head);
  }
}

module.exports = { SegmentTree };
