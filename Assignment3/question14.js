/* Prompt the user to enter the price and the percentage discount. Calculate the 
discounted price and display the result */


let price = prompt("Enter the price:");

let discountPercentage = prompt("Enter the percentage discount:");

price = parseFloat(price);
discountPercentage = parseFloat(discountPercentage);


let discountAmount = (discountPercentage / 100) * price;
let discountedPrice = price - discountAmount;

alert("Discounted price: " + discountedPrice);
