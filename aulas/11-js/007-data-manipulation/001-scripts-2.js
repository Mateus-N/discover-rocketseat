let phrase = `Eu quero viver o amor!`
let myArray = phrase.split(` `)
let phraseWithUnderscore = myArray.join(`_`)
console.log (phrase)
console.log (myArray)
console.log (phraseWithUnderscore)

// Array com construtor
let youArray = new Array (`a`, `b`, `c`, `d`)
console.log (youArray)

// contar elementos Array
console.log ([`a`, {type: `Array`}, function () { return `Alo` }].length)

// transformar cadeia de caracteres em Array
let word = `manipulação`
console.log ( Array.from(word))
