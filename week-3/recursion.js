//Recursion is a function’s ability to call itself. All recursive functions have a base case in order to not call itself forever.

function factorial(num) {
  if (num <= 1) {
    return 1
  }
  return num * factorial(num-1)
}


// Besides when traversing “trees” recursion can be substituted with loops. Loops are also much more memory efficient since you don’t have multiple functions running at once. And the concept of recursion can be quite difficult to grasp. Still, for some reason it is a quite popular concept when it comes to job interviews.
