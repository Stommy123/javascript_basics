/** STRING (easy)
 * Declare a variable called firstName and a variable called lastName
 * The values of both of these variables should be your first and last name in lowercase 
 * Use string methods and concatenation to capitalize only the first letter of your first and last name
 * These newly capitalized names should be reassigned to the same variable 
 * Finally log both of these names seperated by a space to the console
 */

/** STRING (hard)
 * Start with this string "The quick brown fox jumps over the lazy dog"
 * Use string method chaining to output "abcdeeefghhijklmnoooopqrrsttuuvwxyz"
 * Using replace() is not allowed - that would be too easy.
 */


/** NUMBER (easy)
 * Declare a varaible called randomNumber
 * Now using the Math object, make the randomNumber variable equal to a random number being 1-10
 * Test it by outputting this variable to the console either at repl.it or running `node <your file name>.js` multiple times 
 */

/** NUMBER (medium)
 * Given these following variables
 * let bill = 100 
 * let partySize = 4 
 * let tipPercentage = 20
 * Declare three new variables totalTip, tipPerPerson, and totalBill
 * totalTip should be the tip calculated based on the bill
 * tipPerPerson should the totalTip divided by the partySize
 * totalBill should be the totalTip plus the bill 
 * Finally use string "interpolation" (not concatenation) to output "The total tip per person is: $_____" to the console
 */


/** ARRAYS (easy)
 * Given an array let disneyMovies = ['Fast and Furious', 'Snow White' ,'Aladdin', 'Mulan', 'Dirty Dancing']
 * Without declaring any new variables array methods to remove the two non-disney movies from the array
 * Then add 'Frozen' to the front of the array and 'Hercules' to the end of the array
 * When you log the end result, it should look like -> ['Frozen', 'Snow White' ,'Aladdin', 'Mulan', 'Hercules']
 */

/** ARRAYS & OBJECTS (easy)
 * Given the following code block
 * Using your knowledge of how to access indices of arrays / keys on objects
 * Write a console.log statement that will output the name 'Garrosh Hellscream' to the console
 */

 // ___________________________________________________________________________________________________
const WOW = {
    alliance: [
        {
            name: 'Varian Wrynn',
            race: 'Human'
        },
        {
            name: 'Tyrande Whisperwind',
            race: 'Nightelf'
        }
    ],
    horde: [
        {
            name: 'Garrosh Hellscream',
            race: 'Orc'
        },
        {
            name: 'Sylvannas Windrunner',
            race: 'Undead'
        }
    ]
}

// _____________________________________________________________________________________________________

/** OBJECT (medium)
 * Declare an object literal called person 
 * The person object should have the following properties
 * hasArms, hasLegs, and hasWings -> All of these values should be boolean (whether they're true or false is up to you)
 * age -> This should be a number
 * name -> This should be a string
 * speak() -> This should be a function (if you don't know how to give an object a function as a property, look it up), this function should output to the console "Hello world"
 * BONUS: It'll be even better if you can make the speak() function output the object's name property
 * To test this, please call all of the properties under your object 
 */


/** BOOLEANS & CONDITIONALS (easy)
 * Create a variable called hoverboards and set it equal to 0
 * Next write some control flow logic for the following 
 * if hoverboards is greater than OR equal to 100, then log "The future is awesome!"
 * if hoverboards is less than 100 AND hoverboards is greater than 1, then log "The future is alright"
 * if hoverboards is exactly equal to 1, then log "Meh"
 * Otherwise log "The future sucks"
 */

/** BOOLEANS & CONDITIONALS (hard)
 * Given this block of code
 */
//_____________________________________________________________________________________________________________
 const movieCharacters = [
     {
        name: 'Frodo Baggins',
        movie: null
     },
     {
         name: 'Jack Dawson',
         movie: null
     },
     {
         name: 'Anakin Skywalker',
         movie: null
     },
     {
         name: 'Bruce Wayne',
         movie: null
     }
 ]


 /**
  * Write conditional statement in the block below in order to assign the approrpiate movie name given each character's name
  * Hint: This is an array of object, but you don't need to focus too much on the array aspect because the loops have already been written
  * The parameter that will represent each individual object in the loop is 'character'
  * The movie names should all be strings 
  * BONUS: After doing this with an if/else statement, try to see if you can do it using a switch/case (you'll have to look up the syntax)
  */
 movieCharacters.forEach(character => {
     //YOUR CODE HERE
 })

 movieCharacters.forEach(character => console.log(`I'm ${character.name}, I was in ${character.movie}!`))

 // ____________________________________________________________________________________________________________________


/** FUNCTION (hard)
 * Write a function called maxNumber, that will take two arguments and always RETURN the greater of the two numbers
 * Under the function, store the function call to a variable called max
 * Finally output the variable max to the console and verify that you get the desired outcome 
 */


/** CONCEPTS
 * What is the boolean evaluation of "0", "false", !true, !!false, "", "hello world", null, undefined, NaN
 * What is the difference between null and undefined?
 * What is the difference between var, let, and const?
 * What is the difference between == and === 
 * What is the difference between implicit and explicit coercion
 * What are the three ways of declaring functions?
 * Can you use the push() method on an array declared with const?
 */
