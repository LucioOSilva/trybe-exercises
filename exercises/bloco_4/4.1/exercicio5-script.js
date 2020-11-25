/*
Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo.
Retorne true se os ângulos representarem os ângulos de um triângulo e false caso contrário.
*/

let a, b, c;
a = 15;
b = 150;
c = 12;

console.log(validAngle(a, b, c));

function validAngle(value1, value2, value3){
    if ((value1 + value2 + value3) > 180){
        return "false";
    }
    else{
        return "true";
    }
}
