const teste1 = document.getElementById (`teste1`)
console.log (teste1)

const teste2 = document.getElementsByClassName (`teste2`)
console.log (teste2)

const teste3 = document.getElementsByTagName (`h1`)
console.log (teste3)

const teste4 = document.querySelector (`meta`)
console.log (teste4)

const teste5 = document.querySelectorAll (`h2`)
console.log (teste5)
teste5.forEach (el => console.log (el))

// Manipulando conteúdos
const titulo = document.querySelector (`h1`)
titulo.textContent = `DOM`

const teste6 = document.getElementById (`abc`)
teste6.innerHTML += ` <strong>dessa forma</strong>`

const formulario = document.querySelector(`input`)
formulario.value = `Mateus Nunes`

const header = document.querySelector (`header`)
header.setAttribute (`id`, `header`)
console.log ( header.getAttribute (`id`))
header.removeAttribute (`id`)

const body = document.querySelector (`body`)
body.style.backgroundColor = `#F9F3D2`

body.classList.add (`active`)
body.classList.remove (`active`)

// navegando pelos elementos
console.log (body.parentNode)
// NodeList
console.log (body.childNodes)
// HTMLCollection
console.log (body.children)
// firstChild
console.log (body.firstChild)
// firstElementChild
console.log (body.firstElementChild)

// navegar pelos elementos irmãos
// nextSibling
console.log (body.nextSibling)
// nextElementSibling
console.log (body.nextElementSibling)

// criando e adicionando elementos
const div = document.createElement (`div`)
div.innerText = `Olá Devs!`
body.append (div)

const main = body.querySelector (`main`)
body.insertBefore (div, main)

// eventos
function print () {
  console.log (`print`)
}

// empilha funcionalidades
titulo.addEventListener (`click`, print)
// apenas o ultimo

formulario.onkeydown = function (event) {
  console.log (event.currentTarget.value)
}
