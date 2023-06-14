const data = require('../data/zoo_data');

const generateAnimalsRegion = () => data.species.reduce((obj, specie) => {
  obj[specie.location].push(specie.name);
  return obj;
}, ({ NE: [], NW: [], SE: [], SW: [] }));

const animalsNameRegion = (options) => data.species.reduce((acc, { location, name, residents }) => {
  acc[location].push({ [name]: (options.sorted ? residents
    .map((resident) => resident.name).sort() : residents
    .map((resident) => resident.name)) });
  return acc;
}, { NE: [], NW: [], SE: [], SW: [] });

const animalSex = (options) => data.species.reduce((acc, { name, location, residents }) => {
  acc[location].push({ [name]: (options.sorted ? residents
    .filter(({ sex }) => sex === options.sex).map((animal) => animal.name).sort() : residents
    .filter(({ sex }) => sex === options.sex).map((animal) => animal.name)) });
  return acc;
}, { NE: [], NW: [], SE: [], SW: [] });

const getAnimalMap = (options) => {
  if (!options || !options.includeNames) {
    return generateAnimalsRegion();
  }
  if (options.sex) {
    return animalSex(options);
  }
  if (options.includeNames) {
    return animalsNameRegion(options);
  }
};

module.exports = getAnimalMap;
