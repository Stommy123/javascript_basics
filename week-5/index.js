const obj = { a: { d: 5 }, b: 2, c: 3}
const originalArray = [1,2,3]
const copy = obj //SHALLOW COPY
const shallowClone = Object.assign({}, obj) // SHALLOW CLONE
const deepClone = JSON.parse(JSON.stringify(obj)) // DEEEP CLONE
copy.a = 'foobar'
// shallowClone.a.d = 'goodbye'
deepClone.a.d = 'hello'
console.log(obj)

Array.from(originalArray) //CLONE OF ARRAY (CANT REMEMBER IF ITS DEEP OR NOT)
