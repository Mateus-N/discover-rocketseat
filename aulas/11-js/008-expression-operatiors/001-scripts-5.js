let pao = true
let queijo = true

const niceBreakfast = pao && queijo ? `Café top` : `Café ruim`
console.log (niceBreakfast)

// maior de 18
let age = 16
const canDrive = age >= 18 ? `can drive` : `can't drive`
console.log (canDrive)

// python (a = "Hello" if true else "Goodbye")

// Strings
console.log ( `a` == `a` )
// concatenation
console.log ( `a` + `a` )
console.log ( `abc` + 123 )

// FALSY
console.log ( 0 ? `verdadeiro` : `falso` )
// TRUTHY
console.log ( {} ? `verdadeiro` : `falso` )
