import {
  clientLogin,
  clientRegister,
  // clientAccount,
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

import './view.js'
import {
  // renderMainPage,
  renderEmailsList,
  // renderSignUpPage,
  // renderSignInPage,
  renderSendPage,
  renderEmailsListEmailSheet,
  // renderelEmailsListCreateEmailToSend,
  renderelEmailsListAddress,
} from './view.js'

function handleClientRegister(email, passwd, firstName, lastName) {
  const isOk = clientRegister(email, passwd, firstName, lastName)
  if (isOk) {
    window.location.href = '/html/sign_in.html'
    // renderSignUpPage()
  }
}

function handleClientLogin(email, passwd) {
  const isOk = clientLogin(email, passwd)
  if (isOk) {
    // renderSignInPage()
    // renderMainPage(clientAccount)
    window.location.href = '/html/all_email.html'
    renderEmailsList(clientInbox)
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
// function handleClientCreateEmail() {
//   renderelEmailsListCreateEmailToSend(clientAccount)
// }
function handleAddress() {
  window.location.href = './address.html'
  renderelEmailsListAddress(addresses)
}
export {
  handleClientRegister,
  handleClientLogin,
  handleClientReceiveIncoming,
  handleClientReceiveOutcoming,
  handleClientSend,
  handleEmailSheet,
  // handleClientCreateEmail,
  handleAddress,
}
