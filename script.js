
function printLine(){
    console.log('*'.repeat(10));
}

const vFunctions = [];
for (var i = 0; i < 10; i++){
    // Append a function to vFunctions.
    // The function when called will console.log the value of i.
    vFunctions.push( () => console.log(i) )
}

printLine()

// Call each function in vFunctions
console.log('Calling all the functions that wrap the value of var i.');
vFunctions.forEach( f => f() );

printLine()
const lFunctions = [];
for (let i = 0; i < 10; i++){
    // Append a function to lFunctions.
    // The function when called will console.log the value of i.
    lFunctions.push( () => console.log(i) )
}
console.log('Calling all the functions that wrap the value of let i.');
// Call each function in lFunctions
lFunctions.forEach( f => f() )
