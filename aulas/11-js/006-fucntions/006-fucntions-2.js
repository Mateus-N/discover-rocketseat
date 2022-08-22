// funcrion expression, function anonymous
// parameters
const sum = function ( number1, number2 ) {
  let total = ( number1 + number2 )
  return total
}

// arguments
sum (2, 3)
sum (5, 8)
let number1 = 10
let number2 = 15
console.log (`O número 1 é ${number1}`)
console.log (`O número 2 é ${number2}`)
console.log (`A entre eles é ${sum( number1, number2 )}`)
