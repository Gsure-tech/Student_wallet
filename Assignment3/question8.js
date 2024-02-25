// Ask the user to input a distance in kilometers. Convert it to miles using the 
// conversion factor `0.621371`. Display the result.

let kilometers = prompt("Enter distance in kilometers:");

kilometers = parseFloat(kilometers);
const conversionFactor = 0.621371;
let miles = kilometers * conversionFactor;
alert(`Distance in miles:  ${miles}`);