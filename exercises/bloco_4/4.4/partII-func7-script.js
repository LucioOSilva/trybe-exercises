/*
Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word.
Considere que a string ending sempre será menor que a string word .
Valor de teste: "trybe" e "be"
Valor esperado no retorno da função: true
verificaFimPalavra("trybe", "be") ;
Retorno esperado: true
verificaFimPalavra("joaofernando", "fernan") ;
Retorno esperado: false
*/


function verifyEndWords(word,end){
    wordArray = word.split("").reverse().join();
    endArray = end.split("").reverse().join();

    for (let index in endArray){
        if (wordArray[index] === endArray[index]){
        }
        else{
            return false;
        }
    }
    return true;    
}

let word = 'trybe'
let wordEnding = 'be'

console.log(verifyEndWords(word,wordEnding));
