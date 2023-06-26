const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => ids.map((id) => data.species
  .filter((specie) => specie.id === id)).flat();

console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));
module.exports = getSpeciesByIds;
