//object.create
//object literal pattern 
//still uses prototypal inheritance 
//dog object literal

var Dog = {
    name: 'Sam',
    bark: function() {
        console.log("wuff")
    }
}
Dog.speak = function(message) {
    console.log(this.name + " says: " + message)
}

let myDog = Object.create(Dog)
myDog.bark()
console.log(myDog.name)
myDog.speak("hello world")

Dog.type = "Tibetian Spaniel"
Dog.growl = function() {
    this.speak("grrrr")
}
myDog.growl()

