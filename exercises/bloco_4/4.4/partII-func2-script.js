/*
Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
Array de teste: [2, 3, 6, 7, 10, 1]; .
Valor esperado no retorno da função: 4 .
*/

function maiorNumeroArray(arrayNumbers){
    let maior = '0';
    for (let index = 0; index < arrayNumbers.length; index += 1){
        if (arrayNumbers[index] >= maior){
            maior = index;
        }
    }
    return maior;
}

numbers = [2, 3, 6, 7, 10, 1];
console.log(maiorNumeroArray(numbers));

