const data = require('../data/zoo_data');

const generateAnimalsRegion = () => data.species.reduce((obj, specie) => {
  obj[specie.location].push(specie.name);
  return obj;
}, ({ NE: [], NW: [], SE: [], SW: [] }));

const animalsNameRegion = (options) => {
  const regions = { NE: [], NW: [], SE: [], SW: [] };
  data.species.forEach((specie) => {
    regions[specie.location]
      .push({ [specie.name]: options.sorted ? specie.residents
        .map((animal) => animal.name).sort() : specie.residents
        .map((animal) => animal.name) });
  });
  return regions;
};

const animalSex = (options) => {
  const regions = { NE: [], NW: [], SE: [], SW: [] };
  data.species.forEach((specie) => {
    regions[specie.location]
      .push({ [specie.name]: (options.sex && options.sorted) ? specie.residents
        .filter((animal) => animal.sex === options.sex)
        .map((animal) => animal.name).sort() : specie.residents
        .filter((animal) => animal.sex === options.sex)
        .map((animal) => animal.name) });
  });
  return regions;
};

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
