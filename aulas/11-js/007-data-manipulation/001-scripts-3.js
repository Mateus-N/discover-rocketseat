let techs = [`html`, `css`, `js`]
console.log (techs)
// adicionar ao final
techs.push (`nodejs`)
console.log (`Adicionando item ao final`, techs)
// adicionar no inicio
techs.unshift (`sql`)
console.log (`Adicionando ao inicio` ,techs)
// remover do final
techs.pop ()
console.log (`Removendo do final` ,techs)
// remover do começo
techs.shift ()
console.log (`Removendo do inicio` ,techs)
// pegar somente alguns elementos do Array
console.log (`Pegando uma parte` ,techs.slice (1, 3))
// remover itens de qualquer posição
techs.splice (1, 1)
console.log (`Remover de posição específica` ,techs)
// encotrar a posição do elemento
techs.push (`css`, `nodejs`, `sql`)
console.log (techs)
let index = techs.indexOf (`css`)
techs.splice (index, 1)

console.log (`Encontar posição e remover` ,techs)
