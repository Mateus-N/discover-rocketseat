// Apenas no navegador (front)

async function start () {
  const url = `https://api.github.com/users/Mateus-N`
  try {
    const user = await fetch (url).then ( r => r.json())
    const userRepos = await fetch (user.repos_url).then ( r => r.json())
    console.log (userRepos)
  } catch (error) {
    console.log (error)
  }
}

start ()
