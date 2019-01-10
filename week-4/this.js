// JavaScript gives you access to an extremely powerful keyword - “this”. 
// “this” can be used to access data contextually, 
// allowing your functions and methods to access the data that they need based on a specific context. 


// 4 ways that 'this' takes a value 
// 1. in normal function calls 
// 2. Within metods on objects 
// 3. In an instance of an object 
// 4. in a call / apply / bind 

const helloWorld = _ => {
    console.log("Hello world")
    console.log(this)
}
// helloWorld()
// Inside a regular function, it is a Window / Global object 

const Pokemon = {
    name: 'Pikachu',
    color: 'Yellow',
    type: 'Electric',
    speak: function() {
        console.log(`${this.name}!!`)
    },
    self: function() {
        console.log(this)
    }
}

const pikachu = Pokemon
// pikachu.speak()
// pikachu.self()

const whosThatPokemon = _ => {
    console.log(this.name)
}

pikachu.whosThatPokemon = whosThatPokemon
pikachu.whosThatPokemon() // this is one way to assign 'this' to an object
whosThatPokemon() // this is the window/global object andi t odes not have a name property