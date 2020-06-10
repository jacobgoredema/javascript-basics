const now = new Date();
console.log(now);
console.log(typeof now);

// year,  month, day, times
console.log('getFullYear: ', now.getFullYear());
console.log('getMonth: ', now.getMonth());
console.log('getDate: ', now.getDate());

// timestamps
console.log('timestamp: ', now.getTime());

// date String
console.log(now.toDateString());
console.log(now.toTimeString);
console.log(now.toLocaleString);

//  TimeStamps and Comparisons
const before = new Date('February 1 2020 7:30:59');
const nows = new Date();

const diff = (nows.getTime() - before.getTime());
console.log(diff);

const mins = Math.round(diff / 100 /60);
const hours = Math.round(mins / 60);
const days = Math.round(hours / 60);

console.log(mins, hours, days);
console.log(`the blog was written ${days} ago`);

// converting timestamps into date objects
const timestamp =34455;
console.log(new Date(timestamp));

// date fns
const newDate = new Date();
console.log(dateFns.isToday(newDate));

// formating options
console.log(dateFns.format(now,'YYYY'));
console.log(dateFns.format(now,'MMM'));
console.log(dateFns.format(now,'dddd'));
console.log(dateFns.format(now, 'Do'));
console.log(dateFns.format(now,'dddd Do MM YYYY'));