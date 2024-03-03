/*
Write a function called getDaysUntilChristmas that calculates and returns the number of days until Christmas from today's date.
*/

function getDaysUntilChristmas() {
  const today = new Date();
  const christmas = new Date(today.getFullYear(), 11, 25);
  if (christmas < today) {
    christmas.setFullYear(today.getFullYear() + 1);
  }
  const oneDay = 1000 * 60 * 60 * 24;
  const daysUntilChristmas = Math.ceil((christmas - today) / oneDay);
  return daysUntilChristmas;
}

let daysUntilChristmas = getDaysUntilChristmas();
console.log("Days until Christmas:", daysUntilChristmas);
