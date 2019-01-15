// O(N) on a 20yr computer will run at the same speed as O(N) on a new I9 MAC PRO

const obj = {
    firstKey: 'firstValue',
    secondKey: 'secondValue',
}

console.log(obj.firstKey) // => O(1)
console.log(obj.secondKey) // => O(2)

const arr = ['tommy', 'timmy', 'jimmy']
const foo = arr.map(name => console.log(name)) // => O(N)
const bar = arr.forEach(name => console.log(name)) // => O(2N)

const yuck = [[1,2,3], [4,5,6], [7,8,9]]
yuck.map(arr => arr.map(num => num)) // => O(N^2)

// find(), concat(), filter(), includes(), trim(), practically any function that has to loop through an array is O(N)
// so any of them inside an outter loop like a map(), forEach(), or reduce() will make your function O(N^2)