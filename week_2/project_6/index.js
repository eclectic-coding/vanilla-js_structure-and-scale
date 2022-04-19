import {getDay, addDays} from './time.js';

// Create a new Date() object
let halloween = new Date('October 31, 2021');

// Get the day of the week for Halloween
let day = getDay(halloween);
console.log(day);

// Add 5 days to the date
addDays(halloween, 5);
console.log(halloween);
