import { handleClientLogin } from './controller.js'

elLoginButton.onclick = onClickButtonLogin
window.onload = onLoadLogin

function onClickButtonLogin() {
  console.log('hello')
  let email = emailSignin.value
  let passwd = passwordSignin.value
  handleClientLogin(email, passwd)
}
function onLoadLogin() {
  handleLoadPageLogin()
}

// function renderCurrentAccount(newCurrentAccount) {
//   elCurrentAccount.textContent = newCurrentAccount
// }
function renderSignInPage() {
  const elH = document.createElement('h1')
  elH.textContent = 'LoginIn successful'
  window.elSignInPage.appendChild(elH)
}
export { renderSignInPage }
