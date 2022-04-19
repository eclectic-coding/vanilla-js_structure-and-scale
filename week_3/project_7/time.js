/**
 *
 * @param date
 * @constructor
 */
function Constructor(date = []) {
  // if the date is not an array, push into one
  if (!Array.isArray(date)) {
    date = [date];
  }
  this.date = new Date(...date);
}

/**
 * Get the day of the week
 * @return {String}       The day of the week
 */
Constructor.prototype.getDay = function () {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return daysOfWeek[this.date.getDay()];
};

/**
 * Get the month of the year
 * @returns {string}
 */
Constructor.prototype.getMonth = function () {
  const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return monthsOfYear[this.date.getMonth()];
};

/**
 * Add seconds to a date
 * @param {Integer} amount  The number of seconds to add
 */
Constructor.prototype.addSeconds = function (amount) {
  this.date.setSeconds(this.date.getSeconds() + amount);
  return this;
};

/**
 * Add minutes to a date
 * @param {Integer} amount  The number of minutes to add
 */
Constructor.prototype.addMinutes = function (amount) {
  this.date.setMinutes(this.date.getMinutes() + amount);
  return this;
};

/**
 * Add hours to a date
 * @param {Integer} amount  The number of hours to add
 */
Constructor.prototype.addHours = function (amount) {
  this.date.setHours(this.date.getHours() + amount);
  return this;
};

/**
 * Add days to a date
 * @param {Integer} amount  The number of days to add
 */
Constructor.prototype.addDays = function (amount) {
  this.date.setDate(this.date.getDate() + amount);
  return this;
};

/**
 * Add months to a date
 * @param {Integer} amount  The number of months to add
 */
Constructor.prototype.addMonths = function (amount) {
  this.date.setMonth(this.date.getMonth() + amount);
  return this;
};

/**
 * Add years to a date
 * @param {Date}    date    The date object
 * @param {Integer} amount  The number of years to add
 */
Constructor.prototype.addYears = function (amount) {
  this.date.setFullYear(this.date.getFullYear() + amount);
  return this;
};

export default Constructor;
