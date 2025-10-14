import {
  clientAuthenticate,
  clientAuthorize,
  clientRegister,
  clientAccount,
} from './model/client/clientAccount.js'

import {
  addresses,
  clientReceiveIncoming,
  clientReceiveOutcoming,
  clientSend,
  clientInbox,
  clientOutbox,
  getEmailById,
} from './model/client/clientEmails.js'

import './view-sign-up.js'
import './view-sign-in.js'
import './view-compose.js'
import './view-all_email.js'
import './view-address.js'
import { renderSignUpPage } from './view-sign-up.js'
import { renderSignInPage } from './view-sign-in.js'
import { renderEmailsList, renderSendPage } from './view-compose.js'
import { renderEmailsList, renderelEmailsListAddress } from './view-address.js'
import {
  renderEmailsList,
  renderEmailsListEmailSheet,
} from './view-all_email.js'

// import {
//   // renderCurrentAccount,
//   // renderEmailsList,
//   // renderSignUpPage,
//   // renderSignInPage,
//   // renderSendPage,
//   // renderEmailsListEmailSheet,
//   // renderelEmailsListCreateEmailToSend,
//   // renderelEmailsListAddress,
// } from './view.js'

function handleClientRegister(email, passwd, firstName, lastName) {
  const isOk = clientRegister(email, passwd, firstName, lastName)
  if (isOk) {
    renderSignUpPage()
  }
}

function handleClientAuthenticate(email, passwd) {
  const isOk = clientAuthenticate(email, passwd)
  if (isOk) {
    console.log(clientAccount.current.email)
  }
}
function handleLoadPageLogin() {
  const isAuthorized = clientAuthorize()
  if (isAuthorized) {
    renderSignInPage()
    // renderCurrentAccount(clientAccount.current.email)
  }
}

function handleLoadPageCompose() {
  const isAuthorized = clientAuthorize()
  if (!isAuthorized) {
    console.log('вы не вошли в систему')
  }
}
function handleLoadPageAddress() {
  const isAuthorized = clientAuthorize()
  if (isAuthorized) {
    renderelEmailsListAddress(addresses)
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
function handleClientSend(recipient, subject, text) {
  clientSend(recipient, subject, text)
  renderSendPage()
}
function handleEmailSheet(id) {
  const email = getEmailById(id, clientInbox)
  renderEmailsListEmailSheet(email)
}

export {
  handleClientRegister,
  handleClientAuthenticate,
  handleLoadPageLogin,
  handleLoadPageCompose,
  handleLoadPageAddress,
  handleClientReceiveIncoming,
  handleClientReceiveOutcoming,
  handleClientSend,
  handleEmailSheet,
}
