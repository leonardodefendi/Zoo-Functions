const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => data.species
  .find((especie) => especie.name === animal)
  .residents.every((idade) => idade.age >= age);
module.exports = getAnimalsOlderThan;
