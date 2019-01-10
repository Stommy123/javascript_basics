
function Pokemon(name) {
    this.name = name
    this.getName = function() {
        return this.name
    }
    this.getNameSecondTry = _ => {
        return this.name
    }
}

const pikachu = new Pokemon('Pikachu')
console.log(pikachu.getName()) //this is bounded to the new const
const whosThatPokemon = pikachu.getName
console.log(whosThatPokemon()) //this has lost its binding
const whosThatPokemon = pikachu.getNameSecondTry
console.log(whosThatPokemon()) //this is bound to whichever object is calling it


//arrow function binds the function to the instance no matter where its called