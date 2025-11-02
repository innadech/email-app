import { clientAuthorize } from '../model/client/clientAccount.js'
import {
  renderEmailsListEmailSheet,
  renderEmailsList,
  renderelAllEmailBox,
} from '../view/view-all_email.js'
import {
  getEmailById,
  clientReceiveIncoming,
  clientReceiveOutcoming,
  clientInbox,
  clientOutbox,
} from '../model/client/clientEmails.js'

function handleEmailSheet(id) {
  const email = getEmailById(id)
  if (email) renderEmailsListEmailSheet(email)
}

function handleLoadPageAllEmail() {
  const isAuthorized = clientAuthorize()
  if (isAuthorized) {
    clientReceiveIncoming()
    renderEmailsList(clientInbox)
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
