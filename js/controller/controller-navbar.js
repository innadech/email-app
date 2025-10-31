import {
  clientAuthorize,
  getCurrentAccountAddress,
} from '../model/client/clientAccount.js'
import {
  findContactByQuery,
  clientOutbox,
} from '../model/client/clientEmails.js'
import { logout } from '../model/client/clientSessions.js'
import {
  renderCurrentAccount,
  renderNavBarLogOut,
  renderEmailsList,
} from '../view/view-navbar.js'

function handleLoadNavbar() {
  const currentAddress = getCurrentAccountAddress()
  const isAuthorized = clientAuthorize()
  if (isAuthorized) {
    renderNavBarLogOut()
    renderCurrentAccount(currentAddress)
  }
}

function handleLogOut() {
  logout()
}
function handleSearchEmail(query) {
  const findedContactByQuery = findContactByQuery(query, clientOutbox)
  renderEmailsList(findContactByQuery)
}

export { handleLoadNavbar, handleLogOut, handleSearchEmail }
