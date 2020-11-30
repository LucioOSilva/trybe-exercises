/*
Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
*/

//VERIFICA O MAIOR NOME

function maiorNome(arrayNames){
    let menor = arrayNames[0];
    for (let index = 0; index < arrayNames.length; index += 1){
        if (arrayNames[index].split("").length > menor.split("").length){
            menor = arrayNames[index];
        }
    }
    return menor;
}

listNames = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
console.log(maiorNome(listNames));
