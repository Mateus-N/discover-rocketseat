var clima = 'quente'
clima = 'frio'
console.log ( clima )

let clima2
console.log ( clima2 )

const clima3 = 'muito quente' // não pode ser alterada
console.log ( typeof clima3 )

// usa let e const e deixa o var de lado

{
  let a = 0
  console.log (a)
}

console.log ('> existe x antes do bloco? ', x)
{
  var x = 0
}
console.log ('> existe x depois do bloco? ', x)

// console.log ('> existe y antes do bloco? ', y)
{
  let y = 0
  console.log ('> existe y dentro do bloco? ', y)
}
// console.log ('> existe y depois do bloco? ', y)

// alterar a variável dentro do bloco altera globalmente

let z = 5
{
  z = 10
}
console.log (z)
