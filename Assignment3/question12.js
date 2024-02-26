// Ask the user to input a number. Determine if it's a prime number and display the 
// result using console.log.


let number = prompt("Enter a number:");
number = parseInt(number);

let isPrime = true;

if (number < 2) {
    isPrime = false;
} 
else {
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
}
if (isPrime) {
    console.log(number + " is a prime number.");
} else {
    console.log(number + " is not a prime number.");
}
