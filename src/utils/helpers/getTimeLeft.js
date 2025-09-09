/**
 * @typedef {{ hours?: number, minutes?: number }} TimeLeftToRead
 * @param {TimeLeftToRead} timeLeft
 * @returns {string}
 */
const getTimeLeftString = (timeLeft) => {
  let result = "";

  if (timeLeft?.hours) result += `${timeLeft.hours} hours and `;
  if (timeLeft?.minutes) result += `${timeLeft.minutes} minutes `;

  return result ? result + "left" : "";
};

export default getTimeLeftString;
