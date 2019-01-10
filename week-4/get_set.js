class Animal {
    constructor(order, family, genus, species) {
        this.order = order 
        this.family = family 
        this.genus = genus 
        this.species = species 
    }
    get description() {
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
    set newName(name) {
        this.name = name
    }
}


const bethoven = new Dog('Bethoven', 'St Bernard', 'Tall', 'Fat')
console.log(bethoven.bark())
console.log(bethoven.breed)
console.log(bethoven.description)
bethoven.newName = 'Rex'
console.log(bethoven.name)


