
class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    sayHello(){
        console.log(`Good Morning ${this.firstName}, our system detected that you are ${this.age} years old`)
    }
    
    welcome(){
        console.log(`Welcome to OOP lecture ${this.firstName} ${this.lastName}`)
    }
}

const firstName = prompt('Enter Your Firstname');
const lastName = prompt('Enter Your LastName');
const age = prompt('How old are you');

const person1 = new Person(firstName,lastName, age);

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);

person1.welcome();
person1.sayHello();
