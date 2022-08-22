class Parafuso {
  constructor() {
    if (this.constructor === Parafuso) {
      throw new Error (`Classe abstrata não pode ser instânciada`)
    }
  }

  get tipo() {
    throw new Error (`Método "get tipo()" precisa ser implementado`)
  }
}

class Fenda extends Parafuso {
  constructor() {
    super()
  }

  get tipo() {
    return `Fenda`
  }
}

class Philips extends Parafuso {
  constructor() {
    super()
  }

  get tipo() {
    return `Philips`
  }
}

class Allen extends Parafuso {}

// Criar e usar
let fenda = new Fenda()
let philips = new Philips()
let allen = new Allen()

console.log (fenda.tipo, philips.tipo)
