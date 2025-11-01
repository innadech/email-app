import { removeSessionId } from './sessionStorage.js'
import { stopSessionById } from '../server/serverSessions.js'
import { setCurrentAccount } from './clientAccount.js'

function logout() {
  stopSessionById()
  removeSessionId()
  setCurrentAccount(null)
}

export { logout }
