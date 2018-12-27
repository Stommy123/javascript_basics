
const animals = ['lion', 'zebra', 'hippo', 'giraffe', 'penguins']

const [a,b,c, ...d] = animals
const foo = animals[0]
console.log(foo)
console.log(a)
console.log(d)
animals.push("dog")
console.log(animals)


const originalFlavors = ['Chocolate', 'Vanilla']
const newFlavors = ['Strawberry', 'Mint Chocolate Chip', 'Superman']
const inventory = ['Rocky Road', ...originalFlavors, 'Neopolitan', ...newFlavors]
console.log(inventory)

const someFunc = (name, flavor) => console.log(`${name} really likes ${flavor}`)
const args = ['Tommy', 'Vanilla']
someFunc(...args)
