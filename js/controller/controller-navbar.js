import {
  clientAuthorize,
  getCurrentAccountAddress,
} from '../model/client/clientAccount.js'
import { logout } from '../model/client/clientSessions.js'
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

export { handleLoadNavbar, handleLogOut }
