import { clientAuthorize } from './model/client/clientAccount.js'
import { addresses } from './model/client/clientEmails.js'
import { renderelEmailsListAddress } from './view-address.js'

function handleLoadPageAddress() {
  const isAuthorized = clientAuthorize()
  if (isAuthorized) {
    renderelEmailsListAddress(addresses)
  }
}
export { handleLoadPageAddress }
