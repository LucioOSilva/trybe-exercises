/*
Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados.
*/

let a, b;
a = 16;
b = 15;

console.log(biggerThan(a, b));

function biggerThan(value1, value2){
    if (a > b){
        return ("O maior valor é: " + (a));
    }
    else if (a < b){
        return ("O maior valor é: " + (b));
    }
    else{
        return "Os valores são iguais";
    }
}