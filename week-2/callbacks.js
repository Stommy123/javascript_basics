//What is a Callback?
//A callback is a function that is to be executed after another function has finished executing
// hence the name 'callback'

//in javascript, functions are objects. Because of this functions can take functions are arguments
// and can be returned by other functions. Functions that do this are called 'higher-order functions'
//Any function that is passed as an argument is a callback function

function christmas(){
  console.log('Its Christmas');
}
function newYears(){
  console.log('Its New Years!');
}
christmas();
newYears();


function christmas(){
  // Simulate a code delay
  setTimeout( function(){
    console.log('Its Christmas!');
  }, 500 );
}
function newYears(){
  console.log('Its New Years!');
}
christmas();
newYears();

//its not important that you understand setTimeOut right now
// its not that javascript didnt execute our functions in the order we wanted,
// its that javascript didnt wait  for a response from the first before moving to the second
// callbacks are a good way to ensure certain code doesnt run until other code has finished their execution


function openingPresents(callback) {
  console.log("I'm opening presents")
  callback()
  console.log("hello world")
}

openingPresents(function() {
  console.log("I'm done opening presents")
})

//callbacks don't always have to be defined in our function call
function greatPresent() {
  console.log("This present is awesome!")
}

openingPresent(greatPresent)


function greeting(name) {
  alert('Hello ' + name);
}

function processUserInput(callback) {
  var name = prompt('Please enter your name.');
  callback(name);
}

processUserInput(greeting);
