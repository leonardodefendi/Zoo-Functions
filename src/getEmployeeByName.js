const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  const { employees } = data;
  const verify = employees.find((name) => name
    .firstName === employeeName || name.lastName === employeeName);
  if (verify) {
    return verify;
  }
  return {};
};
console.log(getEmployeeByName('Ola'));
module.exports = getEmployeeByName;
