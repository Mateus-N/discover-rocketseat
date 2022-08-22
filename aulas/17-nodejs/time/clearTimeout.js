// setTimeout vai rodar uma função depois de x milisegundos
const timeOut = 3000
const finished = () => console.log (`done!`)

let timer = setTimeout (finished, timeOut)
clearTimeout (timer)
