
//static method
class Character {
    static changeName(name) {
        this.name = name
    }
    constructor(name, classification) {
        this.name = name 
        this.classification = classification
    }
    speak() {
        return `My name is ${this.name}, I'm a ${this.classification}`
    }
}

class Warrior extends Character {
    static changeSpec(warrior, specialization) {
        warrior.specialization = specialization
    }
    constructor(name, classification, specialization) {
        super(name, classification)
        this.specialization = specialization
    }
    describe() { 
        return `I'm an ${this.specialization} warrior!`
    }
}

const red = new Warrior('Red', 'Warrior', 'Protection')
Character.changeName.call(red, 'Blue')
console.log(red.name)
Warrior.changeSpec(red, 'Arms')
console.log(red.specialization)

