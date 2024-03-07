
class Animal{

    eat(){
        console.log('It can eat')
    }
    sleep(){
        console.log('it can sleep')
    }
}


class Dog extends Animal{
    run(){
        console.log('it can run')
    }

}

class Fish extends Animal{
        swim(){
            console.log('it can swim')
        }
}

class Hawk extends Animal{
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