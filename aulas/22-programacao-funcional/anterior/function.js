// Função que eleva o número ao quadrado

// Imperativo: Faça da seguinte forma
let number = 2

// stateful function
function square() {
  return number * number
}

number = square()

// Declarativo: O que fazer e o que não fazer
// stateless function
const square = n => n * n


// Imutabilidade
const cart = {
  quantity: 2,
  total: 200
}

// ruim
cart.quantity = 3

// bom
const newCart = {...cart, quantity: 3}

// Exemplo em ReactJS
const [amount, setAmount] = useState(0)

// Não funciona
amount = 2

// bom
setAmount (2)
