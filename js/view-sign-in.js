import {
  handleClientAuthenticate,
  handleLoadPageLogin,
} from './controller-sign-in.js'

elLoginButton.onclick = onClickButtonLogin

window.onload = onLoadLogin // onLoadPageSignIn

function onClickButtonLogin() {
  console.log('hello')
  let email = emailSignin.value
  let passwd = passwordSignin.value
  handleClientAuthenticate(email, passwd)
}
function onLoadLogin() {
  handleLoadPageLogin()
}

// renderContainerSignIn
function renderSignInPage() {
  elSignInPage.textContent = ''
  const elH = document.createElement('h1')
  elH.textContent = 'LoginIn successful'
  elSignInPage.appendChild(elH)
}
function renderSignInPageOnline() {
  elSignInPage.textContent = ''
  const elH = document.createElement('h1')
  elH.textContent = 'You are online'
  elSignInPage.appendChild(elH)
}

export { renderSignInPage, renderSignInPageOnline }
