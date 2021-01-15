//Escreva a função sumAllNumbers para passar nos testes já implementados.

const assert = require('assert');
// inicio - escreva a função sumAllNumbers aqui
function sumAllNumbers(arrayNumbers) {
  let sum = 0;
  for (const number in arrayNumbers) {
    sum += arrayNumbers[number];
  }
  return sum;
}
//fim da função
const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);