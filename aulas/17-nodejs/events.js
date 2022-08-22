const { EventEmitter } = require (`events`)
const ev = new EventEmitter()

ev.on (`saySomething`, (message) => {
  console.log (`Ouvi ${message}`)
})

ev.once (`saySomething`, (message) => {
  console.log (`Ouvi mas só uma vez, certo ${message}`)
})

ev.emit (`saySomething`, `Mateus`)
ev.emit (`saySomething`, `Castiel`)
