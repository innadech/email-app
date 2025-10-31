import {
  // clientAccount,
  clientAuthorize,
} from '../model/client/clientAccount.js'
import { addresses } from '../model/client/clientEmails.js'
import {
  renderelEmailsListAddress,
  renderContainerAddress,
} from '../view/view-address.js'
// import {
//   renderCurrentAccount,
//   renderNavBarLogOut,
// } from '../view/view-navbar.js'

function handleLoadPageAddress() {
  const isAuthorized = clientAuthorize()
  if (isAuthorized) {
    renderelEmailsListAddress(addresses)
    // renderCurrentAccount(clientAccount.current.email)
    // renderNavBarLogOut()
  } else {
    renderContainerAddress()
  }
}
export { handleLoadPageAddress }
