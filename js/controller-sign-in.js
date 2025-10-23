console.log('controller-sign-in.js')
import {
  clientAuthenticate,
  clientAuthorize,
  clientAccount,
} from './model/client/clientAccount.js'
import { renderCurrentAccount, renderNavBarLogOut } from './view-navbar.js'
import { renderSignInPageOnline } from './view-sign-in.js'
import { renderDivSignUp } from './view-sign-up.js'

function handleClientAuthenticate(email, passwd) {
  const isOk = clientAuthenticate(email, passwd)
  if (isOk) {
    console.log('gut')
    renderDivSignUp('SignUp successful')
    handleLoadPageLogin()
    console.log(clientAccount.current.email)
  } else {
    renderDivSignUp('Please fill in')
  }
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

export { handleClientAuthenticate, handleLoadPageLogin }
