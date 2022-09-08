let date = new Date();
let year = date.getTime();
console.log(year);
console.log(date);

year = Math.floor(year / (3600 * 24 * 365 * 1000)) + 1970;

console.log(year);
