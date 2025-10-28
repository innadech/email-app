import {
  handleClientAuthenticate,
  handleLoadPageLogin,
} from '../controller/controller-sign-in.js'

elFormSignIn.onsubmit = onSubmitSignIn

window.onload = onLoadLogin // onLoadPageSignIn
// window.onload = onLoadLogOut

function onSubmitSignIn(e) {
  e.preventDefault()
  console.log('hello')
  const account = Object.fromEntries(new FormData(e.target))
  handleClientAuthenticate(account)
  console.log(account)
}
// function onLoadLogOut() {
//   handleLogOut()
// }

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
