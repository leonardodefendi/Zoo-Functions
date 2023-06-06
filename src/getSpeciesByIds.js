const data = require('../data/zoo_data');

const getSpeciesByIds = (id1, id2) => {
  const array = [];
  const especies = data.species;
  if (id1 && id2) {
    const animals1 = especies.find((animal) => animal.id === id1);
    const animals2 = especies.find((animal) => animal.id === id2);
    array.push(animals1);
    array.push(animals2);
  } else if (id1) {
    const animals1 = especies.find((animal) => animal.id === id1);
    array.push(animals1);
  }
  return array;
};

module.exports = getSpeciesByIds;
