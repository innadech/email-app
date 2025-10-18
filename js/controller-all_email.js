import { clientAuthorize, clientAccount } from './model/client/clientAccount.js'
import { renderEmailsListEmailSheet } from './view-all_email.js'
import { getEmailById } from './model/client/clientEmails.js'
import { renderCurrentAccount } from './view-navbar.js'
import { handleClientReceiveIncoming } from './controller-emailsList.js'

function handleEmailSheet(id) {
  const email = getEmailById(id, clientInbox)
  renderEmailsListEmailSheet(email)
}
function handleLoadPageAllEmail() {
  const isAuthorized = clientAuthorize()
  if (isAuthorized) {
    renderCurrentAccount(clientAccount.current.email)
    handleClientReceiveIncoming()
    console.log()
  }
}
export { handleEmailSheet, handleLoadPageAllEmail }
