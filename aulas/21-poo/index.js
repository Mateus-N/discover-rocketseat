class Pessoa {
  constructor(nome) {
    this.id = ~~(Math.random() * 100000)
    this.nome = nome
  }

  dizerNome() {
    console.log(`O nome é ${this.nome}`)
  }

  dizerId() {
    console.log(`O Id de ${this.nome} é ${this.id}`)
  }
}

// Estrutural
/*
let altura = 50
let largura = 60

function calcularArea() {
  return altura * largura
}

let area = calcularArea()
*/

// poo

class Poligono {
  constructor(altura, largura) {
    this.altura = altura
    this.largura = largura
  }

  get area() {
    return this.#calcularArea()
  }

  #calcularArea() {
    return this.altura * this.largura
  }
}

// Herança

class Veiculo {
  rodas = 4

  mover(direcao){}
  virar(direcao){}
}

class Moto extends Veiculo {
  constructor() {
    super()
    this.rodas = 2
  }
}

// Polimorfismo

class Atleta {
  peso
  nome
  categoria

  constructor(nome, peso) {
    this.nome = nome
    this.peso = peso
  }

  definirCategoria() {
    if (this.peso <= 50) {
      this.categoria = 'Infantil'
    } else if (this.peso <= 65) {
      this.categoria = 'Juvenil'
    } else {
      this.categoria = 'Adulto'
    }
  }

  dados() {
    console.log(`O nome do atleta é ${this.nome}`, this.categoria ? `e sua categoria é ${this.categoria}` : '')
  }
}

class Lutador extends Atleta {
  constructor(nome, peso) {
    super(nome, peso)
  }

  definirCategoria() {
    if (this.peso <= 54) {
      this.categoria = 'Pluma'
    } else if (this.peso <= 60) {
      this.categoria = 'Leve'
    } else if (this.peso <= 75) {
      this.categoria = 'Meio-leve'
    } else {
      this.categoria = 'Pesado'
    }
  }
}
