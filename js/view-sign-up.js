import { handleClientRegister } from './controller.js'

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
export { renderSignUpPage }
