import { handleClientRegister } from '../controller/controller-sign-up.js'

// эл | штмл элемент | какой именно
// elButtonSignUp

// он   событ | на каком штмл элементе | на каком именно
// on | Click | Button                 | Sig

// elRegisterButton.onsubmit = onSubmitSignUp

// REPL

elFormSignUp.onsubmit = onSubmitSignUp

function onSubmitSignUp(e) {
  const account = Object.fromEntries(new FormData(e.target))
  e.preventDefault()
  handleClientRegister(account)
}

function renderDivSignUp(text) {
  const elH = document.createElement('h2')
  elSignUpPage.innerHTML = ''
  elH.textContent = text
  elSignUpPage.appendChild(elH)
}

export { renderDivSignUp }
