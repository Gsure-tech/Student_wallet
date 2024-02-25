/*Ask the user to input the length and width of a rectangle. Calculate its area and 
perimeter. Display the results.*/

let length = prompt('Enter Length of the rectanagle')
let width = prompt('Enter Width of the rectanagle')

length = parseInt(length);
width = parseInt(width);

let area = length*width;
let perimeter = 2*(length*width);

alert(`Area of the Rectangle is : ${area} and the Peimeter is ${perimeter}`);