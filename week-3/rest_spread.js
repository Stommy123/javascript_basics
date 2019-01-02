const originalFlavors = ['Chocolate', 'Vanilla']
const newFlavors = ['Strawberry', 'Mint']
const inventory = ['Rocky Road', ...originalFlavors, 'Caramel', ...newFlavors]
console.log(inventory)

const someFunc = (name, flavor) => console.log(`${name} really likes ${flavor}`)
const args = ['Tommy', 'Vanilla']
someFunc(...args)


const myFunc = (name, ...params) => console.log(params)
myFunc('Andrew', 1,2,3, 4, 'Ken')
//REST PARAM MUST BE LAST PARM


tommyContact = {
  name: "Tommy S",
  phone: "305 299 0906",
  city: "Miami",
  state: "FL"
}

tommyUser = {
  name: "Tommy",
  birthdate: "Sept 2",
  ...tommyContact
}

console.log(tommyUser)
