import {
  clientAuthenticate,
  clientAuthorize,
  getCurrentAccountAddress,
} from '../model/client/clientAccount.js'
import {
  renderSignInPage,
  renderSignInPageOnline,
} from '../view/view-sign-in.js'

function handleClientAuthenticate(auth) {
  const isOk = clientAuthenticate(auth)
  console.log(isOk)
  const currentAddress = getCurrentAccountAddress()
  if (isOk) {
    renderSignInPage('SignIn successful')
    handleLoadPageLogin()
    console.log('???', currentAddress)
  }
}

function handleLoadPageLogin() {
  const isAuthorized = clientAuthorize()
  if (isAuthorized) {
    renderSignInPageOnline()
  }
}

export { handleClientAuthenticate, handleLoadPageLogin }
