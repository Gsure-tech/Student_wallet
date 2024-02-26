// Ask the user to input the length of a side of a square. Calculate its area and 
// perimeter and display the results.


let sideLength = prompt("Enter the length of a side of the square:");

sideLength = parseFloat(sideLength);

let area = sideLength * sideLength;

let perimeter = 4 * sideLength;



alert(`Area of the square: : ${area} and the Perimeter of the square is ${perimeter}`);
console.log("Area of the square: " + area);
console.log("Perimeter of the square: " + perimeter);
