
/* 11. Ask the user to input their age. Determine if they are eligible to vote (18 years or 
    older) and display the result. */

let age = prompt("Enter your age:");
age = parseInt(age);
let result = (age >= 18) ? "You are eligible to vote!" : "You are not eligible to vote.";

alert(result);
