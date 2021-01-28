// a função abaixo imprime de forma síncrona, altere-a para fazer o mesmo de forma assincrona após 4 segundos
/*
const getPlanet = () => {
  const mars = {
    name: "Mars",
    distanceFromSun: {
      value: 227900000,
      measurementUnit: "kilometers",
    },
  };
  console.log("Returned planet: ", mars);
};

getPlanet(); 
*/
const time = 4000; // podemos atribuir este valor diretamente em setTimeout...

const getPlanet = () => {
  setTimeout(() => {
    const mars = {
      name: "Mars",
      distanceFromSun: {
        value: 227900000,
        measurementUnit: "kilometers",
      },
    };
    console.log("Returned planet: ", mars);
    
  }, time);
};

getPlanet(); 