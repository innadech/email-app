import {
  clientAuthorize,
  getCurrentAccountAddress,
} from '../model/client/clientAccount.js'
import { filtrateEmailsByQuery } from '../model/client/clientEmails.js'
import { logout } from '../model/client/clientSessions.js'
import { renderEmailsList } from '../view/view-all_email.js'
import {
  renderCurrentAccount,
  renderNavBarLogOut,
} from '../view/view-navbar.js'

function handleLoadNavbar() {
  const isAuthorized = clientAuthorize()
  const currentAddress = getCurrentAccountAddress()
  if (isAuthorized) {
    renderNavBarLogOut()
    renderCurrentAccount(currentAddress)
  }
}

function handleLogOut() {
  logout()
}
function handleSearchEmail(query) {
  const findedContactByQuery = filtrateEmailsByQuery(query)
  renderEmailsList(findedContactByQuery)
}

export { handleLoadNavbar, handleLogOut, handleSearchEmail }
