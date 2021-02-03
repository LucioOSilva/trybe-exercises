function hydrateVerifier(arrayDrink) {
  let sumNumbers = 0;
  for (let index = 0; index < arrayDrink.length; index += 1) {
    if (Number(arrayDrink[index])) {
      sumNumbers += Number(arrayDrink[index]);
    }
  }
  return sumNumbers;
}

function hydrate(stringDrinks) {
  let arrayString = stringDrinks.split(' ');
  let glassOfWater = hydrateVerifier(arrayString);
  let drinkWater = `${glassOfWater} copos de água`;
  if (glassOfWater === 1) {
    drinkWater = `${glassOfWater} copo de água`;
  }
  return drinkWater;
}

module.exports = hydrate
