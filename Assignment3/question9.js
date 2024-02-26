
/* Prompt the user to enter the base and height of a triangle. Calculate its area using 
the formula `0.5 * base * height` and display the result */

let base = prompt("Enter the base of the triangle:");
base = parseFloat(base);

let height = prompt("Enter the height of the triangle:");

height = parseFloat(height);

let area = 0.5 * base * height;

alert("The area of the triangle is: " + area);
