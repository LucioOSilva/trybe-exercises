//Escreva a função addOne para passar nos testes já implementados.

const assert = require('assert');

// inicio - escreva a função addOne aqui
function addOne(arr) {
  let newArray = [];
  for (const num in arr) {
    newArray.push(arr[num] + 1);
  }
  return newArray
}
// fim da função

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);