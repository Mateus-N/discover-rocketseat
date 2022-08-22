const express = require (`express`)
const app = express()

app.listen (`3000`)

let author = `Mateus Nunes`

// get
app.route (`/`).get ((req, res) => res.send (author))

// middleware
app.use ( express.json())
// post
app.route (`/`).post ((req, res) => res.send (req.body))

// put - precisa de middleware
app.route (`/`).put ((req, res) => {
  author = req.body.author
  res.send (author)
})

// delete
app.route (`/:identificador`).delete ((req, res) => {
  res.send(req.params.identificador)
})
