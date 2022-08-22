const axios = require (`axios`)

Promise.all ([
  axios.get (`https://api.github.com/users/Mateus-N`),
  axios.get (`https://api.github.com/users/Mateus-N/repos`)
])
.then (responses => {
  console.log(responses[0].data.login)
  console.log(responses[1].data.length)
})
.catch ( error => console.log (error.message))
