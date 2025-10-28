console.log('controller-sign-in.js')
import {
  clientAuthenticate,
  clientAuthorize,
  clientAccount,
} from '../model/client/clientAccount.js'
import {
  renderCurrentAccount,
  renderNavBarLogOut,
} from '../view/view-navbar.js'
import {
  renderSignInPage,
  renderSignInPageOnline,
} from '../view/view-sign-in.js'
import { removeSessionId } from '../model/server/localStorage.js'

function handleClientAuthenticate(account) {
  const isOk = clientAuthenticate(account)
  if (isOk) {
    console.log('gut')
    renderSignInPage('SignUp successful')
    handleLoadPageLogin()
    console.log(clientAccount.current.email)
  }
}
function handleLogOut() {
  removeSessionId()
}

function handleLoadPageLogin() {
  const isAuthorized = clientAuthorize()
  if (isAuthorized) {
    console.log('ok authorized')
    renderSignInPageOnline()
    renderNavBarLogOut()
    renderCurrentAccount(clientAccount.current.email)
  }
}

export { handleClientAuthenticate, handleLoadPageLogin, handleLogOut }
