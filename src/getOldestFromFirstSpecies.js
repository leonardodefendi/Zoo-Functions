const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const findSpecie = data.employees.find((employee) => employee.id === id).responsibleFor[0];
  const findAnimal = data.species.find((specie) => specie.id === findSpecie)
    .residents.sort((a, b) => b.age - a.age)[0];
  return Object.keys(findAnimal).map((caract) => findAnimal[caract]);
};
module.exports = getOldestFromFirstSpecies;
