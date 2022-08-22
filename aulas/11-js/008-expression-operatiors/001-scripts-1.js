// expressão
let number = 1;

// função auto-executável
// antes sempre deve ser colocado o ;
(function () {
  console.log (`alo`)
}) ()

// binary operator - necessita de dois valores
console.log ( number + 1)
// unary operator - apenas um valor
console.log ( ++number )
console.log ( --number )
console.log ( typeof number)
// ternary
console.log ( true ? `alo` : `sem alo por aqui`)

// left-hand-side expression
let myName = new String (`Mateus`)
myName.surName = `Nunes`
let myAge = new Number (21)
console.log (myName, myAge)
let date = new Date (`2022-08-03`)
console.log (date)

// typeof
const person = {
  personName: `Mateus`,
  age: 21
}
console.log (typeof person)
delete person.age
console.log (person)