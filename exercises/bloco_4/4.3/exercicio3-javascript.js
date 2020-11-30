/*
3- Agora inverta o lado do triângulo. Por exemplo:
*/

let n = 3;
let array = [];

//preenche vetor
for (index = 0; index < n; index += 1){
    array[index] = '';
}
//time = quatas trocas serão feitas e também é marcador de posição (de forma decrescente)
for (times = n; times > 0; times -= 1){
    array.splice(times-1,1,'*');
    console.log(array);
}
