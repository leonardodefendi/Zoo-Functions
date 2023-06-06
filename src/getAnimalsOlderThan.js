const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const especies = data.species;
  const bicho = especies.find((especie) => especie.name === animal);
  return bicho.residents.every((idade) => idade.age >= age);
};
module.exports = getAnimalsOlderThan;
