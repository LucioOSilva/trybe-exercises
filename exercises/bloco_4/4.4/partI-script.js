let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  };


//1-Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.
console.log("Bem vinda " + info.personagem);

//Insira no objeto uma nova propriedade com o nome de chave "recorrente" e o valor "Sim" e, em seguida, imprima o objeto no console.
info.recorrente = "Sim"; //ou info['recorrente'] = "Sim";
console.log(info);

// Faça um for/in que mostre todas as chaves do objeto.
for (let atributes in info){
  console.log(info[atributes])
}

//Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: "Tio Patinhas", "Christmas on Bear Mountain, Dell's Four Color Comics #178", "O último MacPatinhas", "Sim".
let complement = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim",
}

let verify1 = '';
let verify2 = '';
for (let atributes in info){
  verify1 = info[atributes];
  verify2 = complement[atributes];
  if (verify1 === verify2){
    console.log("Ambos recorrentes");
    break;
  }
  console.log(info[atributes] + ' e ' + complement[atributes]);
}
