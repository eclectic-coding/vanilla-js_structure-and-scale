import Time from './time.js';

// Create a new Time() instance
let halloween = new Time('October 31, 2021');
let halloween2 = new Time(2021, 9, 31);
let now = new Time();

// Get details from the instance
let date = halloween.date;
let day = halloween.getDay();
let month = halloween.getMonth();

// Add some time
const hall = halloween.addDays(3).addMonths(1).addYears(5);
console.log(hall);
