const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  const aniamlList = data.species.reduce((acc, curr) => {
    acc[curr.name] = curr.residents.length;
    return acc;
  }, {});
  if (!animal) {
    return aniamlList;
  } if (animal.species && animal.sex) {
    return data.species.find((specie) => specie
      .name === animal.species)
      .residents.filter((animalI) => animalI.sex === animal.sex).length;
  }
  return aniamlList[animal.species];
};
module.exports = countAnimals;
