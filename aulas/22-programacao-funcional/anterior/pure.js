// Função impura

// Exemplo 1: está dependendo de dado externo que não foi passado como parâmetro
function calculateCircunference (radius) {
  return Math.PI * (radius + radius)
}

// Exemplo 2: está alterando dado externo
let person = {
  name: `Mateus Nunes`,
  age: `Jovem`
}

function changeName (name) {
  person.name = name
}

// Função pura

// Exemplo 1
const calculateCircunference = function (pi, radius) {
  return pi * (radius + radius)
}

// Com arrow function
const calculateCircunference = (pi, radius) =>
  pi * (radius + radius)

// Exemplo 2
const changePersonName = (person, name) =>
  ({...person, name})
