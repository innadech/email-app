import { clientRegister } from './model/client/clientAccount.js'

import { renderSignUpPage, renderNotOk } from './view-sign-up.js'

function handleClientRegister(email, passwd, firstName, lastName) {
  const isOk = clientRegister(email, passwd, firstName, lastName)
  if (isOk) {
    renderSignUpPage()
  } else {
    renderNotOk()
  }
}
export { handleClientRegister }
