// function hoisting

sayMyName ()
// sofre elevação
function sayMyName () {
  console.log ('Mateus')
}

// arrow function
// não sofre elevação
const sayMyAge = () => {
  console.log (21)
}
sayMyAge ()

// callback function

function callBack ( call ) {
  console.log ('Antes de executar o callback')
  call ()
  console.log ('depois de executar o callback')
}
callBack (
  () => {
    console.log ('Estou em uma callback')
  }
)

/* function constructor 
  * expressão new
  * criar um novo objeto
  * this keyword
*/
function Person ( personName ) {
  this.name = personName
  this.walk = function () {
    return this.name + ` está andando`
  }
}
const mateus = new Person (`Mateus`)
const joao = new Person (`João`)
console.log (mateus.walk())
console.log (joao.walk())
