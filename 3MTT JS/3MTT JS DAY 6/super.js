
class Animal{

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    eat(){
        console.log(`${this.name} can eat`);
    }
    sleep(){
        console.log(`${this.name} can sleep`)
    }
    reproduce(){
        console.log(`${this.name} can reproduce`)
    }
}


class Dog extends Animal{
    constructor(name, age, runSpeed){
        super(name, age);
        this.runSpeed = runSpeed;

    }

    run(){
        console.log('it can run')
    }

}

class Fish extends Animal{
    constructor(name, age, swimSpeed){
        super(name, age);
        this.swimSpeed = swimSpeed;

    }
        swim(){
            console.log('it can swim')
        }
}

class Hawk extends Animal{
    constructor(name, age, flySpeed){
        super(name, age);
        this.flySpeed = flySpeed;

    }
        fly(){
            console.log('It can fly')
        }
}

const fish = new Fish();
const dog = new Dog();
const hawk = new Hawk();

fish.eat();
fish.sleep();
fish.swim();
// fish.run();  this will not work as this method is not within the scope of the fish and not from his parent

console.log("Dog")
dog.eat();
dog.sleep();
dog.run();

console.log("Hawk")
hawk.eat();
hawk.sleep();
hawk.fly();