
/* . Prompt the user to enter a radius. Calculate the area of a circle with that radius 
and display the result. */

// Area of cirle = 2 * pie * (r*r)
let radius;
const pie = 3.142;
let area;

radius = prompt('Enter Radius');
radius = parseInt(radius);
area = (2*pie*(radius*radius));

alert("The Area of the Circle is: " + area);



