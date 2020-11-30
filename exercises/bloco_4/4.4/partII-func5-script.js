/*
Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
Valor esperado no retorno da função: 2 .
*/

function mostRepeatedNum(arrayNumbers){
    numberRepeated = 0;
    numberTimesRepeated = 0;
    
    for (let num in arrayNumbers){
        let number = arrayNumbers[num];
        let repeat = 0;
        for (let num in arrayNumbers){
            if (number === arrayNumbers[num]){
                repeat += 1;
            }
        }
        if (repeat > numberTimesRepeated){
            numberRepeated = number;
            numberTimesRepeated = repeat;
        }
    }
    return numberRepeated;    
}

let array = [2, 3, 2, 5, 8, 2, 3];
console.log(mostRepeatedNum(array))
