let temperature = 37
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37

if ( highTemperature ) {
  console.log (`A pessoa está com muita febre`)
} else if ( mediumTemperature ) {
  console.log (`A pessoa está com febre`)
} else {
  console.log (`A pessoa não está com febre`)
}

// switch
let menu = `a`
switch ( menu ) {
  case `a`:
    console.log (`a`)
    break
  case `b`:
    console.log (`b`)
    break
  default:
    console.log (`default`)
    break
}

// calculadora
function calculate ( number1, operator, number2 ) {
  let result = 0

  switch ( operator ) {
    case `+` :
      result = number1 + number2
      break;
    case `-` :
      result = number1 - number2
      break;
    case `*` :
      result = number1 * number2
      break;
    case `/` :
      result = number1 / number2
      break;
    default:
      console.log (`Não implementado`)
      break;
  }

  return result
}

console.log ( calculate ( 4, `*`, 12))

// throw
function sayMyName ( myName = `` ) {
  if ( myName === `` ) {
    throw `Nome é necessário`
  }

  console.log ( myName )
}

try {
  sayMyName (`Mateus`)
} catch (e) {
  console.log (e)
}
console.log (`Fim de tudo`)
