/*
A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array
1-Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
2-Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
3-Verifique se o array passado por parâmetro não sofreu alterações
4-Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
*/

const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
const arr = [1, 2, 3, 4];
const expected = myRemove(arr, 3);

assert.deepStrictEqual(expected, [1, 2, 4], 'verifica retorno do array esperado [1, 2, 4]'); // 1
assert.notDeepStrictEqual(expected, [1, 2, 3, 4], 'verifica retorno nao deve ser [1, 2, 3, 4]'); // 2
assert.deepStrictEqual(arr, [1, 2, 3, 4], 'O array sofreu alterações') // 3
assert.deepStrictEqual(myRemove(arr,5), 5, 'erro!') // 4
