function greet(name, timeOfDay) {
  name = name || 'Harry'
  timeOfDay = timeOfDay || 'Day'
  console.log(`Good ${timeOfDay}, ${name}`)
}

greet()

function greet(name="Tommy", timeOfDay="Day") {
  console.log(`Good ${timeOfDay}, ${name}`)
}

greet()
greet(undefined, 'Afternoon')
greet('Timmy', 'Night')
