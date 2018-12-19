// Variables can only include  UPPER or lower case letter, $, or _
// Variables cannot begin with numbers but numbers can be used in middle or end
// Variables cannot have spaces
// Cannot use conditional operators in variable names (< > = etc..)
// let foo = "bar"
// declaration -> name -> equal sign -> value
// reserved words -> var, let, default, try, typeof, console, class, function, return, etc

var a;
let b;
const c;

var a = 1
a = 10

let b = 2 //error
b = 20

const c = 3  /error
c = 30 //error

let foo = 10
foo = foo + 5
foo += 5

const camelCase = "thisIsACamelCasedVariable"
const snake_case = "this_is_a_snake_cased_variable"


// use meaningful names
const firstName = "Harry"
const lastName = "Potter"
const fullName = ???
