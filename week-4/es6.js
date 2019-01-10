//es6 constructor is the closest thing to classical inheritance 

class Dog {
    constructor(name) {
        this.name = name
    }
    bark() { 
        console.log('wuff') 
    }
    speak(message) {
        console.log(`${this.name} says: ${message}`)
    }
}


//still need to store it in a variable
new Dog()
const freddy = new Dog("Freddy")
freddy.bark()
console.log(freddy.name)
freddy.speak("Grrr")

class Corgi extends Dog {
    constructor() {
        super("Kayko")
    }
}

const kayko = new Corgi()
kayko.bark()
console.log(kayko.name)

//this is still just an object thats been transpiled through babel 
// but its the closest thing we're going to get to classical inheritance 