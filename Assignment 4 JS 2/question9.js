

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}


// Example

let year = 2024;
console.log(isLeapYear(year)); 

year = 2023;
console.log(isLeapYear(year)); 
