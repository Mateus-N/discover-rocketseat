const url = `http://localhost:5500/api`

function getUsers () {
  axios.get (url)
    .then ( response => {
      apiResult.textcontent = JSON.stringify(response.data)
    })
    .catch ( error => console.error (error))
}

getUsers()
