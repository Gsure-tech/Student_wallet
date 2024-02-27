// alert('Array')

let studentsName = ['Bimbo','Abdul','Sani','Moses'];

let arrayLength = studentsName.length;
let indexAbdul = studentsName.indexOf('Abdul');

console.log("The length of the array is  " + arrayLength + " and the Index of Abdul is " + indexAbdul);



let emptyArray = [];
let name1, name2, name3, name4;

// name1 = prompt('Enter name 1');
// emptyArray.push(name1);

// name2 = prompt('Enter name 2');
// emptyArray.push(name2);

// name3 = prompt('Enter name 3');
// emptyArray.push(name3)

// name4 = prompt('Enter name 4');
// emptyArray.push(name4);

console.log(emptyArray);

let numbers =[1,2,4,4,5,6,7];
let result = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
// alert("The sum of the array is "+result)

let number2 =[1,2,3,4,5,7];
let output = number2.map(num => num * num);

// alert(output);

let output2 = output.reduce((add, currentState) => add + currentState);

console.log(output);
console.log(output2);