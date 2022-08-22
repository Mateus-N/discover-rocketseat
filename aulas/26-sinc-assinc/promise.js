/*
Promise

A promessa de que algo irá acontecer
Poderá dar certo ou errado
mas irá acontecer
*/

let aceitar = false

console.log (`Pedir uber`)

const promessa = new Promise ((resolve, reject) => {

  if (aceitar) {
    return resolve(`Pedido aceito!`)
  }

  return reject(`Pedido negado!`)

})

console.log (`Aguardando`)

promessa
  // Pega o resolve
  .then (result => console.log (result))
  // Pega o reject
  .catch (erro => console.log (erro))
  // Executa de qualquer forma
  .finally (() => console.log (`Finalizado`))
