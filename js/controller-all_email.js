import { clientAuthorize, clientAccount } from './model/client/clientAccount.js'
import { renderEmailsListEmailSheet } from './view-all_email.js'
import { getEmailById } from './model/client/clientEmails.js'

function handleEmailSheet(id) {
  const email = getEmailById(id, clientInbox)
  renderEmailsListEmailSheet(email)
}
function handleLoadPageAllEmail() {
  const isAuthorized = clientAuthorize()
  if (isAuthorized) {
    console.log()
  }
}
export { handleEmailSheet, handleLoadPageAllEmail }
