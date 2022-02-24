const { Trie } = require("./index");

const trie = new Trie();

const wordList = ["hello", "winters", "javascript"];

wordList.forEach((word) => trie.addWord(word));

console.log(trie.search("hello")); // true
console.log(trie.search("hi")); // false

console.log(trie.search("winters")); // true
console.log(trie.search("winter")); // false

console.log(trie.search("javascript")); // true
console.log(trie.search("typescript")); // false
