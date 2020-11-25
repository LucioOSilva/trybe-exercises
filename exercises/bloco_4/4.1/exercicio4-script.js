/*
Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário
*/

let a = -5;

console.log(isNegOrPos(a));

function isNegOrPos(value){
    if (value >= 0){
        return "is positive!";
    }
    else{
        return "is negative";
    }
}