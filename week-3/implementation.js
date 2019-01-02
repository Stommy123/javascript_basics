//The reduce method in JavaScript gives you a simple way to take an array of values and combine them into one value, or sum the array based on multiple category.
const flattened = [[0, 1], [2, 3], [4, 5]].reduce((result, el) => result.concat(el), [])


// simulating reduce with for loop
const calories = [800, 200, 100, 300, 700];
const total1 = 0;

for (let i = 0; i< calories.length; i++){
  total += foods[i];
}

let foods = [
  {name: 'steak', calories: 800},
  {name: 'fruit', calories: 200},
  {name: 'salad', calories: 100},
  {name: 'chips', calories: 300},
  {name: 'ice cream', calories: 700},
]
const total2 = foods.reduce((sum, item) => sum + item.calories, 0)
