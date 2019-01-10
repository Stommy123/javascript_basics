class Character {
    constructor(name, classification) {
        this.name = name 
        this.classification = classification
    }
    speak() {
        return `My name is ${this.name}, I'm a ${this.classification}`
    }
}

class Warrior extends Character {
    constructor(name, classification, specialization) {
        super(name, classification)
        this.specialization = specialization
    }
    describe() { 
        return `I'm an ${this.specialization} warrior!`
    }
}

const red = new Warrior('Red', 'Warrior', 'Protection')
console.log(red.speak())
console.log(red.describe())