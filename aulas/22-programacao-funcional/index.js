// imperativo
let number = 2

/*
function square() {
  return number * number
}

number = square()
*/

// Declarativa
const quadrado = n => n * n

// Imutabilidade
const cart = {
  quantity: 2,
  total: 200
}

// bad
// cart.quantity = 3

// good
const newCart = {...cart, quantity: 3}

// Independente: nada aqui afeta o mundo externo
const random = (number, Math) => {
  Math.floor(Math.random() * number)
}

// recursive
const fatorial = x => {
  
  if (x < 2) {
    return 1
  }

  return x * fatorial(x - 1)
}

//Puras
let person = {
  name: 'Rafael Camarada',
  age: 'Jovem'
}

const changePersonName = (person, name) => ({...person, name})

//first-class function
const sayMyName = () => console.log('Mateus')
const runFunction = fn => fn()

//runFunction(sayMyName)

// higher-order function
const numbers = [2, 4, 8, 16]
const square = n => n * n
const squaredNumber = numbers.map(square)

const pause = wait => fn => setTimeout(fn, wait)

pause(600)(() => console.log('waiting 600ms'))

const wait200 = pause(200)
const wait1000 = pause(1000)

wait200(() => console.log('waiting 200ms'))
wait1000(() => console.log('waiting 1000ms'))
