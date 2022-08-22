console.log (`for`)
for ( let i = 6; i > 0; i-- ) {
  console.log (i)
  if ( i === 5 ) {
    continue
  }
  if ( i === 3 ) {
    break
  }
}

console.log (`while`)
let j = 0
while ( j < 4 ) {
  console.log (j)
  j++;
}

let linha = ``
for ( let b = 1; b <= 10; b++) {
  linha += `*`
}
for ( let a = 1; a <= 10; a++ ) {
  console.log (linha)
}

console.log (`for...of`)
let myName = `Mateus`
let names = [`João`, `Paulo`, `Pedro`]
for ( let char of myName ) {
  console.log (char)
}
for ( let item of names ) {
  console.log (item)
}

console.log (`for...in`)
let person = {
  personName: `Mateus`,
  age: 21,
  weight: 54.5
}
for ( let property in person ) {
  console.log (property)
  console.log (person[property])
}