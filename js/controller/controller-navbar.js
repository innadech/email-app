import {
  clientAuthorize,
  clientAccount,
} from '../model/client/clientAccount.js'
import {
  findContactByQuery,
  clientOutbox,
} from '../model/client/clientEmails.js'
import { removeSessionId } from '../model/server/localStorage.js'
import {
  renderCurrentAccount,
  renderNavBarLogOut,
  renderEmailsList,
} from '../view/view-navbar.js'

function handleLoadNavbar() {
  const isAuthorized = clientAuthorize()
  if (isAuthorized) {
    renderNavBarLogOut()
    renderCurrentAccount(clientAccount.current.email)
  }
}

function handleLogOut() {
  removeSessionId()
}
function handleSearchEmail(query) {
  const findedContactByQuery = findContactByQuery(query, clientOutbox)
  renderEmailsList(findContactByQuery)
}

export { handleLoadNavbar, handleLogOut, handleSearchEmail }
