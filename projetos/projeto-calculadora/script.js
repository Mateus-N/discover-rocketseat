const resultado = document.getElementById('resultado')

function insert(valor) {
  let digitado = valor
  let sub = resultado.innerHTML
  
  if (sub.length < 12) {

    if(sub.length > 0 && (digitado == '+' || digitado == '-' || digitado == '*' || digitado == '/')) {

      let ultimo = sub[sub.length - 1]

      if (ultimo == '+' || ultimo == '-' || ultimo == '*' || ultimo == '/') {
        apagar()
        resultado.innerText += digitado
      } else {
        resultado.innerText += digitado
      }
    } else {
      resultado.innerText += digitado
    }
  }
}

function clean() {
  resultado.innerText = ''
}

function apagar() {
  let sub = resultado.innerHTML
  resultado.innerHTML = sub.substring(0, sub.length -1)
}

function calcular() {
  let sub = resultado.innerHTML
  if (sub.length > 0) {
    resultado.innerText = eval(sub)
  }
}
