const cleanRoom = _ => new Promise((resolve, reject) => resolve('I cleaned my room \n'))
const removeGarabage = message => new Promise((resolve, reject) =>  resolve(message + 'I threw away the trash \n'))
const getIceCream = message => new Promise((resolve, reject) =>  resolve(message + 'my chores are done so I get ice cream \n'))

// cleanRoom().then(result => {
//     return removeGarabage(result)
// }).then(result => {
//     return getIceCream(result)
// }).then(result => {
//     console.log(result + 'now im going to bed')
// })

cleanRoom()
    .then(result => removeGarabage(result))
    .then(result => getIceCream(result))
    .then(result => console.log(result + 'now im going to bed'))

const mowLawn = _ => new Promise(resolve => resolve('I mowed the lawn'))
const vaccumLivingRoom = _ => new Promise(resolve =>  resolve('I vaccumed the living room'))
const scrubBathtub = _ => new Promise(resolve =>  resolve('I scrubbed the bathtub'))
const chores = [mowLawn(), vaccumLivingRoom(), scrubBathtub()]
const done = Promise.all(chores).then( res => {
    res.forEach( chore => console.log(chore))
    console.log("All Done!")
  });




