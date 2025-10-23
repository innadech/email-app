import { clientRegister } from './model/client/clientAccount.js'

import { renderDivSignUp, renderNotOk } from './view-sign-up.js'

function handleClientRegister(email, passwd, firstName, lastName) {
  const isOk = clientRegister(email, passwd, firstName, lastName)
  if (isOk) {
    renderDivSignUp()
  } else {
    renderNotOk()
  }
}
export { handleClientRegister }
