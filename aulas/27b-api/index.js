const express = require (`express`)
const cors = require (`cors`)

const app = express()

app.listen ( 5500, () => console.log (`rodando na porta 5500`))

app.use ( cors())
// middleware
app.use ( express.json())

let users = [
  {
    id: 1,
    name: `Mateus Nunes`,
    avatar: `https://avatars.githubusercontent.com/u/110349788?v=4`,
    city: `Patos`
  },
  {
    id: 2,
    name: `Adrielly Vitória`,
    avatar: `https://picsum.photos.com/200/300`,
    city: `Patos`
  },
  {
    id: 3,
    name: `Castiel Nunes`,
    avatar: `https://picsum.photos.com/200/300`,
    city: `Patos`
  }
]

app.route (`/api`).get ((req, res) => res.json ({
  users
}))

app.route (`/api/:id`).get ((req, res) => {
  const userId = req.params.id

  const user = users.find ( user => Number (user.id) === Number (userId))

  if (!user) {
    return res.json (`User not found!`)
  }

  res.json (user)
})

app.route (`/api`).post ((req, res) => {
  const lastId = users[users.length - 1].id
  users.push ({
    id: lastId + 1,
    name: req.body.name,
    avatar: req.body.avatar,
    citi: req.body.city
  })
  res.json (`Saved user`)
})

app.route (`/api/:id`).put ((req, res) => {
  const userId = req.params.id

  const user = users.find ( user => Number(user.id) === Number (userId))

  if (!user) {
    return res.json (`User not found!`)
  }

  const updatedUser = {
    ...user,
    name: req.body.name,
    avatar: req.body.avatar,
    city: req.body.city
  }

  users = users.map (user => {
    if ( Number (user.id) === Number (userId)) {
      user = updatedUser
    }
    return user
  })

  res.json (`Updated user`)
})

app.route (`/api/:id`).delete ((req, res) => {
  const userId = req.params.id

  users = users.filter ( user => Number (user.id) !== Number (userId))

  res.json (`Deleted User`)
})
