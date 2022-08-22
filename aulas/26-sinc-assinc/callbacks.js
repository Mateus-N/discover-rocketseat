// Funções aceitam qualquer tipo de dado como argumento
function imprimirDado (dado) {
  console.log (`Outras tarefas`)
  console.log (dado())
}

imprimirDado (function () {
  return `Olá mundo`
})

// setTimeout (function, dalay)
setTimeout (function() {
  console.log (`Depois de 1s`)
}, 1000)
