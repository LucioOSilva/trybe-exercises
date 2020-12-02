//Functions
//Agora vamos fazer um exercício que vai deixar claro como funções com responsabilidades bem definidas deixam o código mais bem escrito.
/*Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
    Exemplo de palíndromo: arara .
        verificaPalindrome("arara") ;
            Retorno esperado: true
        verificaPalindrome("desenvolvimento") ;
            Retorno esperado: false
*/

let word = 'arara';

function isPalindrome(word){
    let reversedWord = word.split("").reverse().join("");
    if (word == reversedWord){
        return true;
    }
    else {
        return false;
    }
}

a = isPalindrome(word);
console.log(a);


/*
usando o comando for para percorrer a palavra
let rw = "";
for (let i = word.length -1; i >= 0; i -= 1){
    rw += word[i];
}
console.log('testee: ' + rw);
*/