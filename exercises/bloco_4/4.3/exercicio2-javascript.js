/*
Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
*/

let n = 6;
let array = [];

//preenche vetor
for (index = 0; index < n; index += 1){
    array[index] = '';
}
//time = quatas trocas serão feitas e também é marcador de posição (de forma crescente)
for (times = 0; times < array.length; times += 1){
    array.splice(times,1,'*');
    console.log(array);
}
