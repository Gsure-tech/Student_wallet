// . Prompt the user to enter two numbers. Determine and display the larger of the two 
// numbers.

let a = prompt('Enter First number');
let b = prompt('Enter Second number');

(a>b) ? alert(`${a} is greater than ${b}`) :(a==b) ? alert(`${a} is equal to ${a}`): alert(`${a} is less than  to ${b}`);