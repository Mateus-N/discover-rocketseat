const questions = [
  `O que aprendi hoje?`,
  `O que me deixou aborrecido?`,
  `O que eu poderia fazer para melhorar?`,
  `O que me deixou feliz hoje?`,
  `Quantas pessoas ajudei hoje?`
]

const ask = ( index = 0 ) => {
  process.stdout.write (`${questions[index]} > `)
}

ask()

const answers = []
process.stdin.on (`data`, data => {
  answers.push(data.toString().trim())
  if ( answers.length < questions.length) {
    ask ( answers.length )
  } else {
    process.exit ()
  }
})

process.on (`exit`, () => {
  console.log (`
    Ótimo Mateus

    O que você aprendeu hoje foi: ${answers[0]}
    O que te aborreceu foi: ${answers[1]}
    O que você poderia fazer melhor é: ${answers[2]}
    O que te deixou feliz foi ${answers[3]}
    Você ajudou ${answers[4]} pessoas hoje

    Volte amanhâ para mais reflexões
  `)
})

/*
for ( i = 0; i < questions.length; i++) {
    console.log (`${questions[i]} > ${answers[i]}`)
  }
  console.log (`Volte amanhã para novas reflexões`)
*/