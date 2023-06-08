const data = require('../data/zoo_data');

const getSchedule = (scheduleTarget) => {
  // if (scheduleTarget) {
  //   return data.species.find((specie) => scheduleTarget === specie.name).availability;
  // }
  // const obj = {};
  // Object.keys(data.hours).forEach((day) => {
  //   const teste = [];
  //   data.species.forEach((specie) => ((specie.availability.includes(day)) ? teste.push(specie.name) : false));
  //   obj[day] = {
  //     officeHour: (teste.length === 0) ? 'CLOSED' : `Open from ${data.hours[day]
  //       .open}am until ${data.hours[day].close}pm`,
  //     exhibition: (teste.length === 0) ? 'The zoo will be closed!' : teste,
  //   };
  // });
  // return obj;
};
// console.log(getSchedule());
module.exports = getSchedule;
