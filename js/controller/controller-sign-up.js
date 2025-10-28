import { clientRegister } from '../model/client/clientAccount.js'

import { renderDivSignUp, renderNotOk } from '../view/view-sign-up.js'

function handleClientRegister(account) {
  const isOk = clientRegister(account)
  if (isOk) {
    renderDivSignUp('Your registration was successful.')
  } else {
    renderNotOk()
  }
}
export { handleClientRegister }
