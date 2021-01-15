/*
A função sum(a, b) retorna a soma do parâmetro a com o b
1- Teste se o retorno de sum(4, 5) é 9
2- Teste se o retorno de sum(0, 0) é 0
3- Teste se a função sum lança um erro quando os parametros são 4 e "5" (string 5)
4- Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")
*/

const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

const expected = sum(4,5);
const expected2 = sum(0,0);
const expected3 = sum(4,'5');

assert.strictEqual(sum(4,5), 9, 'soma de 4 + 5 deve ser 9');  // 1
assert.strictEqual(sum(0,0), 0, 'soma de 0 + 0 deve ser 0'); // 2
assert.strictEqual(sum(4,'5'), 9); // 3 error msg escrita na função
