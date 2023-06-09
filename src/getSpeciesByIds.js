const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  const animals = [];
  ids.forEach((id) => animals.push(data.species.find((specie) => id === specie.id)));
  return animals;
};
console.log(getSpeciesByIds());
module.exports = getSpeciesByIds;
