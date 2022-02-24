/* eslint-disable no-unused-vars */
class Node {
  constructor(value = null, isEnd = false) {
    this.value = value;
    this.children = [];
    this.isEnd = isEnd;
  }
}

class Trie {
  constructor() {
    this.head = new Node();
  }

  addWord(word) {
    let head = this.head;

    const wordArray = Array.from(word);
    const wordLength = wordArray.length;

    wordArray.forEach((char, index) => {
      let charNode = head.children.find((node) => node.value === char);
      if (!charNode) {
        charNode = new Node(char, index === wordLength - 1);
        head.children.push(charNode);
      }
      head = charNode;
    });
  }

  search(word) {
    let head = this.head;

    const wordArray = Array.from(word);
    const wordLength = wordArray.length;

    for (const [index, char] of wordArray.entries()) {
      let charNode = head.children.find((node) => node.value === char);

      if (!charNode) {
        return false;
      }

      if (index === wordLength - 1) {
        if (charNode.isEnd) {
          return true;
        } else {
          return false;
        }
      }

      head = charNode;
    }
  }
}

module.exports = { Node, Trie };
