//USING MAP(), LOOP THROUGH THE ARRAY AND OUTPUT A RANDOM GREETING FOR EACH OF YOUR CO WORKER
//THE OUTPUT MESSAGE SHOULD BE "<GREETING>, <NAME>"
const coworkers = [
  'Kimmy',
  'Timmy',
  'Jimmy'
]

const holidayCard = [
  'Merry Christmas!',
  'Happy Hueneka',
  'Happy Kwanza',
]


coworkers.map(name => {
  const randomNumber = Math.floor(Math.random() * holidayCard.length)
  console.log(`${holidayCard[randomNumber]}, ${name}`)
})
