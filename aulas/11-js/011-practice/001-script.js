// notas
function getScore ( score ) {
  let notaA = score >= 90 && score <= 100
  let notaB = score >= 80 && score <= 89
  let notaC = score >= 70 && score <= 79
  let notaD = score >= 60 && score <= 69
  let notaF = score < 60 && score >=0
  let result
  if ( notaA ) {
    result = `A`
  } else if ( notaB ) {
    result = `B`
  } else if ( notaC ) {
    result = `C`
  } else if ( notaD ) {
    result = `D`
  } else if ( notaF ) {
    result = `F`
  } else {
    result = `"inválida"`
  }
  return result
}

console.log ( getScore (55))

// sistema de gastos
let family = {
  incomes: [1000, 1500, 2600, 200],
  expenses: [1000, 2000]
}
function sum ( array ) {
  let total = 0
  
  for ( let value of array ) {
    total += value
  }

  return total

}
function orçamentoFamiliar () {
  const calculateIncomes = sum ( family.incomes )
  const calculateExpenses = sum ( family.expenses )

  const total = calculateIncomes - calculateExpenses
  let itsOk = total > 0
  if ( itsOk ) {
    return `O saldo está positivo com um total de ${total.toFixed (2)}R$`
  } else {
    return `O saldo está negativo com um débito de ${total.toFixed (2)}R$`
  }
}

console.log ( orçamentoFamiliar ())

// converter C° e F°
function converter ( degree ) {
  const celsiusExist = degree.toUpperCase().includes(`C`)
  const fahrenheitExist = degree.toUpperCase().includes(`F`)

  // Fluxo de erro
  if ( !celsiusExist && !fahrenheitExist ) {
    throw new Error (`Grau não identificado`)
  }

  // Fluxo ideal
  let updatedDegree = Number (degree.toUpperCase().replace(`F`, ``))
  let formula = (fahrenheit) => ( fahrenheit - 32 ) * 5/9
  let degreeSign = `C°`

  // fluxo alternativo
  if (celsiusExist) {
    updatedDegree = Number (degree.toUpperCase().replace(`C`, ``))
    formula = (celsius) => celsius * 9/5 + 32
    degreeSign = `F°`
  }

  return formula (updatedDegree) + degreeSign

}

try {
  console.log (converter (`50f`))
  console.log (converter (`10c`))
  console.log (converter (`10z`))
} catch (error) {
  console.log (error.message)
}

// Array
const booksByCategory = [
  {
    category: `Riqueza`,
    books: [
      {
        title: `Os segredos da mente milionária`,
        author: `T. Harv Eker`,
      },
      {
        title: `O homem mais rico da Babilônia`,
        author: `George S. Clason`,
      },
      {
        title: `Pai rico, pai pobre`,
        author: `Robert T. Kiyosaki e Sharon L. Lechter`,
      },
    ],
  },
  {
    category: `Inteligência Emocional`,
    books: [
      {
        title: `Você é insubstituível`,
        author: `Augusto Cury`,
      },
      {
        title: `Ansiedade - Como enfrentar o mal do século`,
        author: `Augusto Cury`,
      },
      {
        title: `Os 7 hábitos das pessoas altamente eficazes`,
        author: `Stephen R. Covey`,
      },
    ],
  },
];
const totalCategories = booksByCategory.length
console.log (`O total de categorias é`)
console.log (totalCategories)

for ( let category of booksByCategory ) {
  console.log (`Total de livros da categoria`, category.category)
  console.log ( category.books.length)
}
function countAuthors () {
  let authors = []
  
  for ( let category of booksByCategory) {
    for ( let book of category.books) {
      if ( authors.indexOf (book.author) == -1 ) {
        authors.push (book.author)
      }
    }
  }
  console.log (`Total de autores:`, authors.length)
}

countAuthors ()

function bookaOfAuthor ( author ) {
  let books = []
  
  for ( let category of booksByCategory) {
    for ( let book of category.books) {
      if ( book.author === author) {
        books.push (book.title)
      }
    }
  }
  console.log (`Livros do autor ${author}: ${books.join(`, `)}`)
}

bookaOfAuthor (`Augusto Cury`)
