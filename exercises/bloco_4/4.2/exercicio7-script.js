/*
Utilizando for , descubra qual o menor valor contido no array e imprima-o;
*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorNum;

menorNum = numbers[0];
for (let i = 0; i < numbers.length; i++){
    if(numbers[i] < menorNum){
        menorNum = numbers[i];
    }
}
console.log("O menor numero do array é: " + menorNum +"!!!");
