// Write a function called formatDate that takes a JavaScript Date object as a parameter and returns a string in the format "MM/DD/YYYY".

function formatDate(date) {
  const formatter = (num) => (num < 10 ? "0" : "") + num;
  const month = formatter(date.getMonth() + 1); // Months are zero based
  const day = formatter(date.getDate());
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
}

//example

let date = new Date();
let formattedDate = formatDate(date);
console.log("Formatted date:", formattedDate);

