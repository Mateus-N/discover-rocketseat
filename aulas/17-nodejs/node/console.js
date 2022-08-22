global.console.log (`Alguma coisa aqui`)
console.log (__dirname)
console.log (__filename)
// maneira de chamar módulos nativos
const path = require(`path`)
console.log (path.basename (__filename))
// meus módulos
const myModule = require (`./exports`)
console.log (myModule)

const firstName = process.argv[2]
const lastName = process.argv[3]
console.log (`Seu nome é ${firstName} ${lastName}`)

// passar com flags
// node console --name "Mateus Nunes" -- greeting "Tudo bem com você?"
