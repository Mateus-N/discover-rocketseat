console.log ({})
console.log ('Mateus'.__proto__)
console.log ('Mateus'.length)
console.log (true.__proto__)
// conversion
console.log ( Number ('9') + 5 )
// coersion
console.log ( '9' + 5 )

// conventendo manualmente
let string = '123'
console.log ( Number (string))
let number = 321
console.log ( String (number))

// contando caracteres e digitos
let word = `Notebook`
console.log (word.length)
let int = 1234
console.log ( String (int).length )

// usando metodos
let real = 123.123
console.log ( real.toFixed(2).replace(`.`, `,`) )
/* 
console === objeto
.log === metodo
*/

// letras maiúsculas em minúsculas

let phrase = `Programar é muito legal!`
console.log ( phrase.toLocaleUpperCase() )
console.log ( phrase.toLocaleLowerCase() )

// encotrar a palavra amor
let text = `Eu quero viver o amor!`
console.log ( text.includes(`amor`) )