
/*

Write a function called sortArray that takes an array of strings as a parameter and returns the array sorted in alphabetical order.

*/


const sortArray = (strings) => {
  return strings.sort();
};

//example
let strings = ["banana", "apple", "orange", "grape"];
let sortedStrings = sortArray(strings);
console.log("Sorted array:", sortedStrings);
