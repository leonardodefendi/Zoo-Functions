const data = require('../data/zoo_data');

const isManager = (id) => {
  const { employees } = data;
  return employees.some((employee) => employee.managers.some((ids) => ids === id));
};

const getRelatedEmployees = (managerId) => {
  const { employees } = data;
  if (isManager(managerId)) {
    const array = [];
    employees.map((employe) => employe
      .managers.filter((id) => (id === managerId ? array.push(employe) : false)));
    return array.map((person) => `${person.firstName} ${person.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
};

console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));
module.exports = { isManager, getRelatedEmployees };
