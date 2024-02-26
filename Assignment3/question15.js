/*Prompt the user to enter a principal amount, interest rate, and time in years. 
Calculate the simple interest and display the result*/

let principal = prompt('Enter principal amout');
let interestRate = prompt("Enter interest rate");
let time = prompt("Enter time");


principal = parseFloat(principal);
interestRate = parseFloat(interestRate);
time = parseFloat(time);

let simpleInterest = (principal * interestRate * time) / 100;
alert("Simple interest: " + simpleInterest);
