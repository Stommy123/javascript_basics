// Class: In OOP classes serve as blueprints for object creation. 
// A class is an intangible construct that creates objects 
// based on the specifications of said class.  
// Classes define the state 
// (properties that identify an object as an individual entity) 
// and behavior 
// (properties that define the behavior of all objects created from a class).

// Constructor functions are functions that are called with the new keyword. 
// This function creates a new object. 
// They differ from factory functions in how they create this objects.

// New Binding: 4 things happen when we use the new keyword with a function
// 1. A new object is created
// 2. This object is linked to the functions prototype
// 3. ‘this’ is bound to the object created on step 1
// 4. The new object is returned


// Inheritance refers to how class instances can refer to properties defined in other classes called parent classes. 
// A class can inherit from another class by using the ‘extends’ keyword. 
// If you want the Dog class to be able to use the properties of the Animal class 
// you would set up Dog to inherit from Animal.

class Animal {
    constructor(order, family, genus, species) {
        this.order = order 
        this.family = family 
        this.genus = genus 
        this.species = species 
    }
    describe() {
        return `${this.order} | ${this.family} | ${this.genus} | ${this.species} `
    }
}

class Dog extends Animal {
    constructor(name, breed, height, weight) {
        super('Carnivora', 'Canidae', 'Canis', 'C.lupus')
        this.name = name 
        this.breed = breed 
        this.height = height
        this.weight = weight 
    }
    bark() {
        return `${this.name} is barking!`
    }
}

// super is a reference to the parent's class constructor function 
// which means that super will call the constructor method of animal passing predefined values to it
// all dogs will have the same values for species order, genus, and family 
// but different values for name, breed, height, and weight 

const bethoven = new Dog('Bethoven', 'St Bernard', 'Tall', 'Fat')
console.log(bethoven.describe())
console.log(bethoven.bark())
console.log(bethoven.breed)


//There’s no obvious advantage of using one way of doing OOP over the other.
// Except for the fact that ES6 classes are way easier to implement than ES5 OOP. 
// I would always use ES6 classes when possible. 
// And getting familiar with classes is extremely important considering that classes are a fundamental part of React.js.