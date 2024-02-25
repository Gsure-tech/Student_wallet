/*  Question1. Prompt the user to enter two numbers. Calculate the result of their sum, difference, 
product, and division. Display the results using alerts.*/


let num1;
let num2;  
num1 = prompt("Enter First Number");
num2 = prompt("Enter First Number");

num1 = parseInt(num1);
num2 = parseInt(num2);

let sumResult = num1 + num2;
let diffResult = num1 - num2;
let prodResult = num1 * num2; 
let divResult = num1 / num2;


alert(`The sum of the two numbers is: ${sumResult}, the Difference is ${diffResult}, the Product is ${prodResult} and the Division is ${divResult}`)