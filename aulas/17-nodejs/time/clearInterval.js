// setTimeout vai rodar uma função depois de x milisegundos
const timeOut = 1000
const checking = () => console.log (`checking`)

let interval = setInterval (checking, timeOut)

setTimeout ( () => clearInterval (interval), 6000)
