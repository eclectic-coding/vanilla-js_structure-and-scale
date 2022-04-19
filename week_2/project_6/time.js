/**
 * Get the day of the week
 * @param  {Date}   date  The date object
 * @return {String}       The day of the week
 */
function getDay(date) {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return daysOfWeek[date.getDay()];
}

/**
 * Get the month of the year
 * @param   {Date}  date The date object
 * @returns {string}
 */
function getMonth(date) {
  const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return monthsOfYear[date.getMonth()];
}

/**
 * Add seconds to a date
 * @param {Date}    date    The date object
 * @param {Integer} amount  The number of seconds to add
 */
function addSeconds(date, amount) {
  date.setSeconds(date.getSeconds() + amount);
}

/**
 * Add minutes to a date
 * @param {Date}    date    The date object
 * @param {Integer} amount  The number of minutes to add
 */
function addMinutes(date, amount) {
  date.setMinutes(date.getMinutes() + parseInt(amount));
}

/**
 * Add hours to a date
 * @param {Date}    date    The date object
 * @param {Integer} amount  The number of hours to add
 */
function addHours(date, amount) {
  date.setHours(date.getHours() + parseInt(amount));
}

/**
 * Add days to a date
 * @param {Date}    date    The date object
 * @param {Integer} amount  The number of days to add
 */
function addDays(date, amount) {
  date.setDate(date.getDate() + parseInt(amount));
}

/**
 * Add months to a date
 * @param {Date}    date    The date object
 * @param {Integer} amount  The number of months to add
 */
function addMonths(date, amount) {
  date.setMonth(date.getMonth() + parseInt(amount));
}

/**
 * Add years to a date
 * @param {Date}    date    The date object
 * @param {Integer} amount  The number of years to add
 */
function addYears(date, amount) {
  date.setFullYear(date.getFullYear() + parseInt(amount));
}

export { getDay, getMonth, addSeconds, addMinutes, addHours, addDays, addMonths, addYears }
