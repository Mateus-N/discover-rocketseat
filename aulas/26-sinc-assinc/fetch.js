// Funciona apenas no navegador

fetch (`https://api.github.com/users/Mateus-N`)
.then ( response => response.json())
.then ( data => fetch ( data.repos_url))
.then ( res => res.json())
.then ( repos => console.log (repos))

.catch ( err => console.log (err))
