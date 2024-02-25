/*  
Ask the user to input a temperature in Celsius. Convert it to Fahrenheit using the 
formula `(Celsius * 9/5) + 32` and display the result.

*/

let c = prompt('input temperature in Celsius');
c=parseInt(c);
let fahrenheit = (c*9/5) +32;

alert(" The Temperature in Fahrenheit is : " +  fahrenheit)