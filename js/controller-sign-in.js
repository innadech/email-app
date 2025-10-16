console.log('controller-sign-in.js')
import {
  clientAuthenticate,
  clientAuthorize,
  clientAccount,
} from './model/client/clientAccount.js'
import { renderCurrentAccount } from './view-navbar.js'
import { renderSignInPage, renderSignInPageOnline } from './view-sign-in.js'

function handleClientAuthenticate(email, passwd) {
  const isOk = clientAuthenticate(email, passwd)
  if (isOk) {
    console.log('gut')
    renderSignInPage()
    handleLoadPageLogin()
    console.log(clientAccount.current.email)
  }
}
function handleLoadPageLogin() {
  const isAuthorized = clientAuthorize()
  if (isAuthorized) {
    console.log('ok authorized')
    renderSignInPageOnline()
    renderCurrentAccount(clientAccount.current.email)
  }
}
export { handleClientAuthenticate, handleLoadPageLogin }
