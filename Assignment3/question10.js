/* 
10. Ask the user to input two numbers. Calculate their remainder when divided and 
display the result.
 */


let num1 = prompt("Enter the first number:");

let num2 = prompt("Enter the second number:");

num1 = parseFloat(num1);
num2 = parseFloat(num2);
let remainder = num1 % num2;


alert("The remainder when " + num1 + " is divided by " + num2 + " is: " + remainder);
