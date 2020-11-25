/*
Faça cinco programas, um para cada operação aritmética básica.
Seu programa deve ter duas variáveis, a e b , definidas no começo com os valores que serão operados.
Faça programas para: |Adição| - |Subtração| - |Multiplicação| - |Divisão| -|Módulo|
*/

let a, b;
a = -4;
b = 0;

console.log("A soma de: " + (a) + "+" + (b) + " = " + (soma(a,b)));
console.log("A subtração de: " + (a) + "-" + (b) + " = " + (subtrai(a,b)));
console.log("A multiplicação de: " + (a) + "*" + (b) + " = " + (multiplica(a,b)));
console.log("A divisão de: " + (a) + "/" + (b) + " = " + (divide(a,b)));
console.log("O módulo de: |" + (a) + " + " + (b) + "| = " + (modulo(a,b)));


/* functions para cada exemplo */
function soma(value1, value2) {
    return value1 + value2;
}

function subtrai(value1, value2){
    return value1 - value2;
}

function multiplica(value1, value2){
    return value1 * value2;
}

function divide(value1, value2){
    if (value2 == 0){
        return "impossible division by zero";
    }
    else{
        return String(value1 / value2).substring(0,3);
    }
}

function modulo(value1, value2){
    result = value1 - value2;
    if (result < 0) {
        return result * - 1;
    }
    else{
        return result;
    }
}
