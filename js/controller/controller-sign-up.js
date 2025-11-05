import { clientRegister } from '../model/client/clientAccount.js'

import { renderDivSignUp } from '../view/view-sign-up.js'

function handleClientRegister(regData) {
  const isOk = clientRegister(regData)
  if (isOk) {
    renderDivSignUp('Your registration was successful.')
  } else {
    renderDivSignUp('Registration fail')
  }
}
export { handleClientRegister }
