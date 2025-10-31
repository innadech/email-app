console.log('controller-sign-in.js')
import {
  clientAuthenticate,
  clientAuthorize,
  clientAccount,
} from '../model/client/clientAccount.js'
import {
  renderSignInPage,
  renderSignInPageOnline,
} from '../view/view-sign-in.js'

// import { removeSessionId } from '../model/server/localStorage.js'

function handleClientAuthenticate(auth) {
  const isOk = clientAuthenticate(auth)
  if (isOk) {
    renderSignInPage('SignIn successful')
    handleLoadPageLogin()
    console.log(clientAccount.current.email)
  }
}

function handleLoadPageLogin() {
  const isAuthorized = clientAuthorize()
  if (isAuthorized) {
    renderSignInPageOnline()
  }
}

export { handleClientAuthenticate, handleLoadPageLogin }
