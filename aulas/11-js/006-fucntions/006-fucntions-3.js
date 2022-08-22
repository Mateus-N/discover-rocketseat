// function scope
let subject = 'Create video'

function createThink ( subject ) {
  subject = 'Study'
  return subject
}

console.log ( subject )
console.log ( createThink ( subject ))
