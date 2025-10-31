import { handleClientRegister } from '../controller/controller-sign-up.js'

// эл | штмл элемент | какой именно
// elButtonSignUp

// он   событ | на каком штмл элементе | на каком именно
// on | Click | Button                 | Sig

// elRegisterButton.onsubmit = onSubmitSignUp

// REPL

elFormSignUp.onsubmit = onSubmitSignUp

function onSubmitSignUp(e) {
  e.preventDefault()
  console.log('???')
  const account = Object.fromEntries(new FormData(e.target))
  handleClientRegister(account)
  console.log(account)
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
