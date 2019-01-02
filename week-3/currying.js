//Currying is the process of taking a function with multiple arguments and turning it into a sequence of functions each with only a single argument.


const sum = x => y => x + y;
// returns the number 3
sum (2)(1);
// returns a function y => 2 + y
sum (2);


function curryingCreateCharacter(head) {
  return function(body) {
    return function(arms) {
      return function(legs) {
        return {
          head: head,
          body: body,
          arms: arms,
          legs: legs
        }
      }
    }
  }
}

const curriedCharacter = curryingCreateCharacter("big")("body")("arms")("legs")
