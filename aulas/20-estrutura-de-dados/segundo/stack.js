// Criação de objeto pilha
class Stack {
  // Função que será executada assim instanciar objeto
  constructor() {
    this.data = []
    this.top = -1
  }

  push(value) {
    this.top++
    this.data[this.top] = value
    return this.data
  }

  pop() {
    if (this.top < 0) return undefined
    const poppedTop = this.data[this.top]
    delete this.data[this.top]
    this.top--
    return poppedTop
  }

  peek() {
    return this.top >= 0 ? this.data[this.top] : undefined
  }

  size() {
    let size = this.top
    size++
    return size
  }

}

const pilha = new Stack()
pilha.push('Primeiro elemento')
console.log(pilha.size(), pilha.peek())
pilha.push('Segundo')
pilha.push('Terceiro')
console.log(pilha.size(), pilha.peek())
pilha.pop()
console.log(pilha.size(), pilha.peek())
