import { clientAuthorize } from '../model/client/clientAccount.js'
import { parseAddresses } from '../model/client/clientEmails.js'
import {
  renderelEmailsListAddress,
  renderContainerAddress,
} from '../view/view-address.js'

function handleLoadPageAddress() {
  const isAuthorized = clientAuthorize()
  if (isAuthorized) {
    renderelEmailsListAddress(parseAddresses())
    console.log(parseAddresses())
  } else {
    renderContainerAddress()
  }
}
export { handleLoadPageAddress }
