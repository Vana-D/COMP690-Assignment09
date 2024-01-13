//  GLOBAL VARIABLES
const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];


//  STEP 1  ----------------------------------------------
function numberOfDays() {
  let year = prompt('Enter year (Format Ex: 2024)');
  let month = prompt('Enter month as digit (Format Ex: 1)');
  const daysInMonth = (year, month) => new Date(year, month, 0).getDate();
  console.log(daysInMonth(year, month));
}
numberOfDays();


//  STEP 2  ----------------------------------------------
function monthName() {
  let m = prompt('Enter date (Format Ex: 1/1/2024)');
  m = new Date(m).getMonth();
  console.log(months[m]);
}
monthName();


//  STEP 3  ----------------------------------------------
function weekendOrNot() {
  let d = prompt('Enter date (Format Ex: 1/1/2024)');
  d = new Date(d).getDay();
  if (d == 0 || d == 6) {
    console.log(`Yes ${day[d]} is a weekend`);
  } else {
    console.log(`No ${day[d]} is not a weekend.`);
  }
}
weekendOrNot();


//  STEP 4  ----------------------------------------------
function yesterdayDay() {
  let today = new Date(prompt('Enter today\'s date (Format Ex: 1/1/2024)'))         
  let yesterday = new Date(today - 1 ).getDay();
  let yesterdayDay = (`${day[yesterday]}`) 
  console.log(yesterdayDay)
}
yesterdayDay();


//  STEP 5  ----------------------------------------------
function currentDayWeek() {
  let d2 = prompt('Enter date (Format Ex: 1/1/2024)');
  d2 = new Date(d2) .getDay();
  console.log(day[d2].charAt(0));
}
currentDayWeek();
