import {
  getCurrentAccountAddress,
  clientAuthorize,
} from '../model/client/clientAccount.js'
import { clientSend } from '../model/client/clientEmails.js'
import {
  renderComposeBox,
  renderContainerCompose,
  renderComposeAccountEmail,
} from '../view/view-compose.js'

function handleLoadPageCompose() {
  console.log('ok')
  const isAuthorized = clientAuthorize()
  const currentAddress = getCurrentAccountAddress()
  if (isAuthorized) {
    console.log(currentAddress)
    renderComposeAccountEmail(currentAddress)
  } else {
    renderContainerCompose()
    console.log('Вы не вошли в систему')
  }
}

function handleClientSend(email) {
  clientSend(email)
  renderComposeBox()
}

export { handleLoadPageCompose, handleClientSend }
