import { handleLoadNavbar } from '../controller/controller-navbar.js'
import {
  handleClientAuthenticate,
  handleLoadPageLogin,
} from '../controller/controller-sign-in.js'

elFormSignIn.onsubmit = onSubmitSignIn

window.onload = onLoadLogin // onLoadPageSignIn
// window.onload = onLoadLogOut

function onSubmitSignIn(e) {
  e.preventDefault()
  const auth = Object.fromEntries(new FormData(e.target))
  console.log(auth)
  handleClientAuthenticate(auth)
}

function onLoadLogin() {
  handleLoadPageLogin()
  handleLoadNavbar()
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
