/*
Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
*/

//RETORNA O INDICE DO MENOR VALOR
function menorNumeroArray(arrayNumbers){
    let menor = arrayNumbers[0];
    for (let index = 0; index < arrayNumbers.length; index += 1){
        if (arrayNumbers[index] < menor){
            menor = index;
        }
    }
    return menor;
}

numbers = [2, 4, 6, 7, 10, 0, -3];
console.log(menorNumeroArray(numbers));
