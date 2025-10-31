import { removeSessionId } from './sessionStorage.js'
import { stopSessionById } from '../server/serverSessions.js'

function logout() {
  stopSessionById()
  removeSessionId()
}
export { logout }
