const data = require('../data/zoo_data');

const isManager = (id) => {
  const { employees } = data;
  return employees.some((employee) => employee.managers.some((ids) => ids === id));
};

const getRelatedEmployees = (managerId) => {
  const { employees } = data;
  if (isManager(managerId)) {
    return employees.filter(({ managers }) => managers.includes(managerId))
      .map(({ firstName, lastName }) => `${firstName} ${lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
};

module.exports = { isManager, getRelatedEmployees };
