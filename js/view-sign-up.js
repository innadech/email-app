import { handleClientRegister } from './controller-sign-up.js'

elRegisterButton.onsubmit = onSubmitSignUp

function onSubmitSignUp() {
  let email = emailSignup.value
  let passwd = passwordSignup.value
  let repeatpasswd = repeatpasswordSignup.value
  let firstName = firstnameSignup.value
  let lastName = lastnameSignup.value
  if (email === '') {
    alert('Please fill in email')
  }
  if (passwd === repeatpasswd)
    handleClientRegister(email, passwd, firstName, lastName)
  console.log(email)
}

// renderDivSignUp(text) // 'SignUp successful' | 'Account already exists'
function renderDivSignUp(text) {
  elSignUpPage.textContent = '' // .innerHTML = ''
  const elH = document.createElement('h2')
  elH.textContent = text
  elSignUpPage.appendChild(elH)
}
function renderNotOk() {
  elSignUpPage.textContent = ''
  const elH = document.createElement('h2')
  elH.textContent = 'Account already exists'
  elSignUpPage.appendChild(elH)
}
export { renderDivSignUp, renderNotOk }
