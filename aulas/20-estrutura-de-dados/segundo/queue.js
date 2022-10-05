class Queue {
  constructor() {
    this.data = []
    this.top = -1
  }

  enqueue(item) {
    this.top++
    this.data[this.top] = item
    console.log(`${item} chegou na fila`)
  }

  dequeue() {
    if (this.data < 0) return undefined
    let item = this.data[0]
    for (let i = 0; i < this.size(); i++) {
      this.data[i] = this.data[i + 1]
    }
    delete this.data[this.top]
    this.top--
    console.log (`${item} saiu da fila`)
  }

  front() {
    return this.data[this.top]
  }

  size() {
    let size = this.top
    return size++
  }
}


const fila = new Queue
fila.enqueue('Adrielly')
console.log(fila.front())
fila.enqueue('Mateus')
fila.enqueue('Castiel')
console.log(fila.front())
fila.dequeue()
console.log(fila.front())
