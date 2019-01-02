const toybox = { item1: 'car', item2: 'ball', item3: 'frisbee' }
console.log(toybox.item1)
console.log(toybox['item2'])
const { item1, item2 } = toybox
console.log(item1)
//ERROR ITEM3 WAS NEVER DEFINED console.log(item3)
const { item3: foo } = toybox
console.log(foo)


const animals = ['lion', 'zebra', 'hippo', 'giraffe', 'penguin1', 'penguin2', 'penguin3']
const [a,b,c,d ...e] = animals
console.log(a)
console.log(d)



function getData({url, method = 'get'} = {}, callback) {
  callback(url, method)
}

getData({url: 'someUrl.com'}, (url, method) => console.log(url,method))
getData({url: 'someUrl.com', method: 'post'}, (url, method) => console.log(url,method))

const parentObject = {
  title: 'Super Important',
  childObject: {
    title: 'Equally Important'
  }
}

const { title, childObject: { title: childTitle } } = parentObject

console.log(childTitle)
