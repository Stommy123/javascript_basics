/** FOR EACH (Easy)
* You're a fire pokemon trainer
* Write a forEach loop that will iterate over this array of pokemons
* If the pokemon is a fire type pokemon, push it into the array myParty
*/
const people = [
  {
    name: 'Charizard',
    type: 'Fire'
  },
  {
    name: 'Pikachu',
    type: 'Electric'
  },
  {
    name: 'Magmar',
    type: 'Fire'
  },
  {
    name: 'Onyx',
    type: 'Rock'
  },
  {
    name: 'Moltres',
    type: 'Fire'
  }
]
const myParty = []


/** MAP (Medium)
* I'm planning a new york trip.
* I'd like to know which omakase has toro because that's my favorite piece of sushi
* Write a function that takes an array of sushiRestaurant
* That function should map through the array and returns "Im going to <name>", if the restaurant serves toro
* Otherwise it should return "Ill save this spot for next time!"
*/
const sushiRestaurant = [
  {
    name: 'Sushi Noz',
    pieces: ['Toro', 'Scallop', 'Snapper', 'Eel', 'Shrimp']
  },
  {
    name: 'Ginza Onodera',
    pieces: ['Salmon', 'Toro', 'Yellowtail', 'Uni', 'Squid']
  },
  {
    name: 'Sushi Nakazawa',
    pieces: ['Scallop', 'Crab', 'Tamago', 'Eel', 'Squid']
  },
  {
    name: 'Ichimura',
    pieces: ['Uni', 'Saba', 'Ikura', 'Toro', 'Wagyu']
  },
  {
    name: 'Cagen',
    pieces: ['Some weird fish', 'Tuna', 'Some weird fish', 'Wagyu', 'Some weird fish']
  }
]

/** Filtering (Easy)
* In ruby we have an array method called Compact
* This method will do a shallow loop through the array and remove any falsey values (null, undefined, false, 0, "", NaN)
* Javascript doesnt have a pre built compact function, but we can write one
* Define a function called compact that takes an array as an argument then filters out any falsey values
* Test your function with these examples
*/
['hello world', 'goobye world', 0, ""] // ['hello world', 'goobye world']
['foo', false, 'bar', undefined, {}] // ['foo', 'bar', {}]
[[false, undefined, 0, NaN], 'goobye world', 123] // [[false, undefined, 0, NaN], 'goobye world', 123]


/** More Loops (Medium)
* WRITE CODE TO LOOP THROUGH THIS ARRAY THAT WILL ALWAYS OUTPUT THE **NAME** OF THE YOUNGEST MEMBER.
* THE LOOP SHOULD TAKE INTO ACCOUNT THAT THE ARRAY CAN CHANGE AT ANY TIME
* THIS IS SIMILAR TO THE MAX NUMBER ASSIGNMENT BUT WITH A FEW EXTRA TWISTS
* You can use any loop that you see fit
*/
const kids = [
  { name: 'Tommy', age: 17, },
  { name: 'Timmy', age: 10, },
  { name: 'Jimmy', age: 14, },
]


/** Factory Function (Hard)
* Create a factory function called `createBook`.
* The "Book" that our factory function creates should have the attributes name, author, pages and finishedReading.
* The finishedReading attribute should be defaulted to false if no argument is passed.
* Create a new function that will populate myBooks and make sure you name the function appropriately:
* This new function should take an array as an argument.
* It will then  loop over the array to create a book using your factory function createBook.
* Store the final result into an varaible called myBooks
*/
const BOOK_LIST = [
  ["Don Quixote", "Miguel de Cervantes", 300, true],
  ["Dante's Inferno", "Dante Alighieri", 450, true],
  ["The Illiad", "Homer", 232],
  ["The Art of War", "Sun Tzu", 578],
  ["Animal Farm", "George Orwell", 321],
  ["Hamlet", "William Shakespeare"],
  ["The Great Gatsby", null, 450]
]

/** Recursion (BONUS)
* In Javascript we have a method called flat() which will perform a shallow flatten i.e [1,2,[3,4]] => [1,2,3,4]
* But it wouldnt work for 3+ layer array i.e [1,[2,[3,[4,5]]]]
* Without using the built in method flat(), write a recursive function called flattenDeep
* This function should take an array of any dimensions deep and flatten it to a single dimension array
* There are other ways of solving this other than recursion, but recursion is prolly the cleanest and most efficient
* Use these arrays to verify
* You'll need to look up for ways to checking for arrays, and remember, typeof {} / typeof [], are both 'object' so that won't work
*/
[1,2,3,[1,2,3,4,[2,3,4]]] // [ 1,2,3,1,2,3,4,2,3,4 ]
['hello world', 'goodbye world', [1,2,['foo']]] // ['hello world', 'goodbye world', 1, 2, 'foo']
[1,2,3] // [1,2,3]
[] // []


/**
* Explain what a factory function is?
* How can we change the way functions are hoisted?
* What is a callback?
* What are default parameters and how do we write them?
* What is recursion?
*/
