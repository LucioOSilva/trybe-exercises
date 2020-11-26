/*
Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.
*/

arr = [];
let div;

for (let i = 0; i < 25; i++){
    arr[i] = [i+1];
    div = arr[i]/2;
    console.log("O resultado da divisão é: " + div);
}
