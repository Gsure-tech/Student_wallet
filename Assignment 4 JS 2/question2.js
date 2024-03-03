/*

Write a function called findMax that takes an array of numbers as
 a parameter and returns the largest number in the array.
*/


const findMax = (numbers) => {
  if (numbers.length === 0) {
    return null;
  }
  let maxNum = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxNum) {
      maxNum = numbers[i];
    }
  }
  return maxNum;
};

let numbers = [3, 5, 1, 9, 2];
let maxNum = findMax(numbers);
console.log("Max number:", maxNum);
