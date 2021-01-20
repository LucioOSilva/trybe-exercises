const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];

// Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra 'a' maiúscula ou minúscula.

const repeatedAValues = (acc, curr) => {
  for (let index = 0; index < curr.length; index += 1) {
    if (curr[index] === 'a' || curr[index] === 'A') {
      acc += 1;
    }
  }
  return acc;
};

function containsA() {
  const aTimes = names.reduce(repeatedAValues, 0);
  return aTimes;
}

assert.deepStrictEqual(containsA(), 20);
