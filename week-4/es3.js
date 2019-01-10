// javascript doesn't have classes, instead we have prototypal inheritance rather than classical inheritance 


console.dir({})
// without classes javascript leans on functions to do the heavy lifting
// this class is actually a constructor function
function Dog(name) {
    // attributes that the class must be created with
    this.name = name
}

Dog.prototype.bark = function() {
    console.log("Wuff!")
}
//how would you access it??
new Dog()

//by storing it in a variable 
var theo = new Dog("Theo")
theo.bark()
console.log(theo.name)


//es3 inheritance 
function SecondDog() {
    this.constructor('Mochi')
}
SecondDog.prototype = new Dog()
var mochi = new SecondDog()
console.log(mochi.name)
mochi.bark()