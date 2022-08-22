const express = require (`express`)
const axios = require (`axios`)

const app = express()

app.listen (`3000`)

// middleware
app.use ( express.json())

/* app.route (`/`).get ((req, res) => {
  const {nome, cidade} = req.body
  res.send (`Você se chama ${nome} e mora na cidade de ${cidade}`)
}) */
// app.route (`/`).get ((req, res) => res.send (req.query.nome))
// app.route (`/:nome`).get ((req, res) => res.send (req.params.nome))

app.route (`/`).get ((req, res) => {

  axios.get (`https://api.github.com/users/Mateus-N`)
  .then ( result => res.send (`<img src="${result.data.avatar_url}" alt="Imagem de perfil de Mateus">`))
  .catch ( error => res.send (error))

})

app.route (`/`).put ((req, res) => res.send (req.body.author))

app.route (`/:parametro`).get ((req, res) => res.send (req.params.parametro))
