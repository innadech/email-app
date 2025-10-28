import { handleLogOut } from '../controller/controller-sign-in.js'
// import { handleLogOutCompose } from '../controller/controller-compose.js'

function renderCurrentAccount(newCurrentAccount) {
  elCurrentAccount.textContent = newCurrentAccount
}
function renderNavBarLogOut() {
  const elLi = generateLi()
  elUl.appendChild(elLi)
}
function generateLi() {
  const elLi = document.createElement('li')
  const elA = document.createElement('a')
  elLi.classList.add('nav-item')
  elA.classList.add('nav-link')
  elA.setAttribute('href', '/html/sign_in.html')
  elA.onclick = onClickLogOut
  elA.innerHTML = 'LogOut'
  elLi.appendChild(elA)
  return elLi
}
function onClickLogOut() {
  handleLogOut()
}

export { renderCurrentAccount, renderNavBarLogOut }
