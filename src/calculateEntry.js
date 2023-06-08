const data = require('../data/zoo_data');

const countEntrants = (entrants) =>
  ({
    child: entrants.filter((entrant) => entrant.age < 18).length,
    adult: entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length,
    senior: entrants.filter((entrant) => entrant.age >= 50).length,
  });
const calculateEntry = (entrants) => {
  let soma = 0;
  if (!entrants || entrants.length === 0) {
    return soma;
  }
  Object.keys(countEntrants(entrants))
    .forEach((person) => {
      soma += data.prices[person] * countEntrants(entrants)[person];
    });
  return soma;
};

console.log(calculateEntry());
module.exports = { calculateEntry, countEntrants };
