class Pessoa {
  constructor(nome) {
    this.nome = nome
  }

  dizerNome() {
    console.log (this.nome)
  }
}

const mateus = new Pessoa (`Mateus`)
mateus.dizerNome()

// estruturado
let valorHora = 50
let tempoEstimado = 20
let desconto = valorHora * tempoEstimado * (10 / 100)
let custoEstimado = valorHora * tempoEstimado - desconto
console.log (custoEstimado)

// POO
const job = new Job ()
job.valorHora = 50
job.tempoEstimado = 20
job.desconto = 10
const custoEstimado2 = job.calcularEstimativa()
console.log (custoEstimado2)
