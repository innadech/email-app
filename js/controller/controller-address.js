import { clientAuthorize } from '../model/client/clientAccount.js'
import { parseRemoveDuplicates } from '../model/client/clientEmails.js'
import {
  renderDivCounterparties,
  renderContainerAddress,
} from '../view/view-address.js'

function handleLoadPageAddress() {
  const isAuthorized = clientAuthorize()
  if (isAuthorized) {
    const counterparties = parseRemoveDuplicates()
    console.log(counterparties)
    renderDivCounterparties(counterparties)
  } else {
    renderContainerAddress()
  }
}
export { handleLoadPageAddress }
