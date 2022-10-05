// imperativo
let number = 2

function square() {
  return number * number
}

number = square()

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

// reactJS
const [amount, setAmount] = useState(0)

// bad
// amount = 2

// good
setAmount(2)


// Independente: nada aqui afeta o mundo externo