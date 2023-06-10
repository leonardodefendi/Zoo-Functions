const data = require('../data/zoo_data');

const generateObj = () => data.employees.map((employe) => ({
  id: employe.id,
  fullName: `${employe.firstName} ${employe.lastName}`,
  species: employe.responsibleFor.map((animal) => data.species
    .find((specie) => specie.id === animal).name),
  locations: employe.responsibleFor.map((animal) => data.species
    .find((specie) => specie.id === animal).location),
}));
const verifica = (employee) => {
  if (employee.length > 0) {
    return generateObj().some((funci) => funci.fullName
      .includes(employee[0].name) || funci.id === employee[0].id);
  } if (employee.length === 0) {
    return true;
  }
  return false;
};

const getEmployeesCoverage = (...employee) => {
  if (verifica(employee)) {
    if (employee.length > 0) {
      return generateObj().find((funci) => funci.fullName
        .includes(employee[0].name) || funci.id === employee[0].id);
    }
    return generateObj();
  }
  throw new Error('Informações inválidas');
};
module.exports = getEmployeesCoverage;
