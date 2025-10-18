import { clientAccount, clientAuthorize } from './model/client/clientAccount.js'
import { clientSend } from './model/client/clientEmails.js'
import { renderComposeBox, renderContainerCompose } from './view-compose.js'
import { renderCurrentAccount } from './view-navbar.js'

function handleLoadPageCompose() {
  const isAuthorized = clientAuthorize()
  if (isAuthorized) {
    renderCurrentAccount(clientAccount.current.email)
  } else {
    renderContainerCompose()
    console.log('вы не вошли в систему')
  }
}
function handleClientSend(recipient, subject, text) {
  clientSend(recipient, subject, text)
  renderComposeBox()
}

export { handleLoadPageCompose, handleClientSend }
