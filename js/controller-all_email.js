import { clientAuthorize, clientAccount } from './model/client/clientAccount.js'
import {
  renderEmailsListEmailSheet,
  renderEmailsList,
  renderelAllEmailBox,
} from './view-all_email.js'
import {
  getEmailById,
  clientReceiveIncoming,
  clientReceiveOutcoming,
  clientInbox,
  clientOutbox,
} from './model/client/clientEmails.js'
import { renderCurrentAccount, renderNavBarLogOut } from './view-navbar.js'
// import { handleClientReceiveIncoming } from './controller-emailsList.js'

function handleEmailSheet(id) {
  const email = getEmailById(id, clientInbox)
  renderEmailsListEmailSheet(email)
}
function handleLoadPageAllEmail() {
  const isAuthorized = clientAuthorize()
  if (isAuthorized) {
    renderCurrentAccount(clientAccount.current.email)
    clientReceiveIncoming()
    renderEmailsList(clientInbox)
    renderNavBarLogOut()
    console.log()
  } else {
    renderelAllEmailBox()
  }
}
function handleClientReceiveIncoming() {
  clientReceiveIncoming()
  renderEmailsList(clientInbox)
}
function handleClientReceiveOutcoming() {
  clientReceiveOutcoming()
  renderEmailsList(clientOutbox)
}
export {
  handleEmailSheet,
  handleLoadPageAllEmail,
  handleClientReceiveIncoming,
  handleClientReceiveOutcoming,
}
