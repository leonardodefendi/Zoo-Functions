const data = require('../data/zoo_data');

const countEntrants = (entrants) =>
  ({
    child: entrants.filter((entrant) => entrant.age < 18).length,
    adult: entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length,
    senior: entrants.filter((entrant) => entrant.age >= 50).length,
  });
const calculateEntry = (entrants) => {
  if (!entrants || entrants.length === 0) {
    return 0;
  }
};

module.exports = { calculateEntry, countEntrants };
