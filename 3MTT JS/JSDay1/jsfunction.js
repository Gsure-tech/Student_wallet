// const sayHello = function(name){
//     alert("Hello " + name);
// }
// let person = prompt("What is your name")


// function sayHello(name){
//     alert("Hello " + name)
// }
// sayHello(person);

//ARROW FUNCTION
// let add =(a,b) => a+b;
// let a=4;
// let b =5;
// let result1 = add(a,b);
// alert(result1);


let action = (a,b) => {
    if(a>b){
        alert(a + " is the greatest")
    }else{
        alert(b + " is the greatest")
    }
}

let a,b;

// a = Number(prompt('Enter the value of a'));
// b = Number(prompt('Enter the value of b'));

// action(a,b)

//function to perform subtraction

let subtraction = (c,d) =>(c-d);

let c,d;
c = Number(prompt('Enter the value of c'));
d = Number(prompt('Enter the value of d'));

alert(subtraction(c,d))
