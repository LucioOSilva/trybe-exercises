/*
Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.
*/

let a, b, c;
a = 100;
b = 15;
c = 120;

console.log(biggerInThree(a, b, c));

function biggerInThree(value1, value2, value3){
    if ((value1 > value2) && (value1 > value3)){
        return ("O maior valor é :" + (value1));
    }
    else if(value2 > value3){
        return ("O maior valor é :" + (value2))
    }
    else{
        return ("O maior valor é :" + (value3))
    }
}