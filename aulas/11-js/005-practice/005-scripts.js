// declaration
var name
// assingment
firstName = 'Mateus'
// type
console.log (typeof firstName, firstName)

let age = 21 // number
let isHuman = true // boolean

// declaration group
let job, hobbie
job = 'developer'
hobbie = 'play console games'
console.log ("I'm a " + job + " and my hobbie is " + hobbie)
console.log (`Hi, name's ${firstName}, i'm a ${job} and my hobbie is ${hobbie}`)

// object
const person = {
  secondName: 'Mateus',
  secondAge: 21,
  weight: 54.5,
  isAdmin: true
}
console.log (`${person.secondName} is ${person.secondAge} years old`)

// array
const animals = [
  'lion',
  'monkey',
  'cat',
  {
    animalName: 'wolf',
    animalAge: 6
  }
]
console.log (`The ${animals[3].animalName} is ${animals[3].animalAge} years old`)
console.log (animals.length)
console.log (animals)
