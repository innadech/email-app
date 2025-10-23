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
  elA.innerHTML = 'LogOut'
  elLi.appendChild(elA)
  return elLi
}

export { renderCurrentAccount, renderNavBarLogOut }
