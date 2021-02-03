function techList(arrayNamesAndTechs, name) {
  if (arrayNamesAndTechs.length > 0) {
    arrayNamesAndTechs.sort();
    arrayReturned = arrayNamesAndTechs.map((tech) => {
      return { 'tech': tech, 'name': name }
    });
    return arrayReturned;
  }
  return 'Vazio!';
}

module.exports = techList;
