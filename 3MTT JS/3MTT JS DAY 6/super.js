
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

        move(speed){
            console.log(`${this.name} can move at a speed of ${speed}rmp`)
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

const fish1 = new Fish('Tillapia Fish',2,34);
const fish2 = new Fish('Bungar Fish',3,24);
const fish3 = new Fish('Titus Fish',4,66);
const dog = new Dog();
const hawk = new Hawk();

fish1.reproduce();
fish1.eat();
fish1.sleep();
fish1.swim();
fish1.move(12);

fish2.reproduce();
fish2.eat();
fish2.sleep();
fish2.swim();

fish3.reproduce();
fish3.eat();
fish3.sleep();
fish3.swim();
// fish.run();  this will not work as this method is not within the scope of the fish and not from his parent

console.log("Dog")
const dog1 = new Dog('Bobby',2,34);
const dog2 = new Dog('Bingo',3,24);
const dog3 = new Dog('Bucky',4,66);

dog1.eat();
dog1.sleep();
dog1.run();

console.log("Hawk")
const hawk1 = new Hawk('Molo',2,34);
const hawk2 = new Hawk('Bolo',3,24);
const hawk3 = new Hawk('Solo',4,66);
hawk1.eat();
hawk1.sleep();
hawk1.fly();