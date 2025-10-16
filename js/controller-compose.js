// import { clientAccount } from './model/client/clientAccount.js'

import { clientAuthorize } from './model/client/clientAccount.js'
import { clientSend } from './model/client/clientEmails.js'
import {
  renderSendPage,
  redirectToCompose,
  renderPageCompose,
} from './view-compose.js'

function handleLoadPageCompose() {
  const isAuthorized = clientAuthorize()
  if (isAuthorized) {
    redirectToCompose()
    console.log('вы не вошли в систему')
  } else {
    renderPageCompose()
  }
}
function handleClientSend(recipient, subject, text) {
  clientSend(recipient, subject, text)
  renderSendPage()
}

export { handleLoadPageCompose, handleClientSend }
