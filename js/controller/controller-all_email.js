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
  filtrateEmailsByQuery,
} from '../model/client/clientEmails.js'

function handleEmailSheet(id) {
  console.log('handleEmailSheet')
  const email = getEmailById(id)
  if (email) renderEmailsListEmailSheet(email)
}
function handleSearchEmail(query) {
  const findedContactByQuery = filtrateEmailsByQuery(query)
  renderEmailsList(findedContactByQuery)
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
  handleSearchEmail,
}
