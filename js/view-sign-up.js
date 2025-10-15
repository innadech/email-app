import { handleClientRegister } from './controller-sign-up.js'

elRegisterButton.onclick = onClickButtonRegister

function onClickButtonRegister() {
  let email = emailSignup.value
  let passwd = passwordSignup.value
  let repeatpasswd = repeatpasswordSignup.value
  let firstName = firstnameSignup.value
  let lastName = lastnameSignup.value
  if (passwd === repeatpasswd) {
    handleClientRegister(email, passwd, firstName, lastName)
    console.log(email)
  }
}
function renderSignUpPage() {
  elSignUpPage.textContent = ''
  const elH = document.createElement('h2')
  elH.textContent = 'SignUp successful'
  elSignUpPage.appendChild(elH)
}
function renderNotOk() {
  elSignUpPage.textContent = ''
  const elH = document.createElement('h2')
  elH.textContent = 'Account already exists'
  elSignUpPage.appendChild(elH)
}
export { renderSignUpPage, renderNotOk }
