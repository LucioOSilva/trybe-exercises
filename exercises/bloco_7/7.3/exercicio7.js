const assert = require('assert');
// inicio - escreva a função wordLengths aqui
function wordLengths(arrayWords) {
  const arraySizeWords = [];
  for (const word in arrayWords){
    const size = arrayWords[word].split('').length;
    arraySizeWords.push(size);
  }
  return arraySizeWords;
}
// fim da função
const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);