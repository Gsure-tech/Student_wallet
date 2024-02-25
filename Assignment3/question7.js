/*
Prompt the user to enter a number. Check if it's even or odd and display the result 
using an alert.
*/

let a = prompt("Enter a number to Check if its even or odd");
if(a%2===0){
    alert(`${a} is Even`);
}
else{
    alert(`${a} is Odd`)
}