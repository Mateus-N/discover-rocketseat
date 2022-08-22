const buttom = document.getElementById (`openmodal`)
const div = document.querySelector (`div`)

buttom.onclick = function () {
  div.classList.remove (`invisible`)
}
document.addEventListener (`keydown`, function (event) {
  const isEscKey = event.key === `Escape`
  const haveClass = div.classList.contains (`invisible`)
  if (isEscKey && !haveClass) {
    div.classList.add (`invisible`)
  }
})
