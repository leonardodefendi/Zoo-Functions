const data = require('../data/zoo_data');

const genereteObj = () => {
  const obj = {};
  Object.keys(data.hours).forEach((day) => {
    const teste = [];
    data.species
      .forEach((specie) => ((specie.availability.includes(day)) ? teste.push(specie.name) : false));
    obj[day] = {
      officeHour: (teste.length === 0) ? 'CLOSED' : `Open from ${data.hours[day]
        .open}am until ${data.hours[day].close}pm`,
      exhibition: (teste.length === 0) ? 'The zoo will be closed!' : teste,
    };
  });
  return obj;
};

const getSchedule = (scheduleTarget) => {
  const obj = Object.keys(genereteObj());
  const generate = genereteObj();
  if (data.species.some((specie) => specie.name === scheduleTarget)) {
    return data.species.find((specie) => scheduleTarget === specie.name).availability;
  }
  if (obj.some((day) => day === scheduleTarget)) {
    return {
      [scheduleTarget]: generate[scheduleTarget],
    };
  }
  return generate;
};
console.log(genereteObj());
// console.log(genereteObj());
module.exports = getSchedule;
