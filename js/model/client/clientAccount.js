import { restoreSessionId, saveSessionId } from './sessionStorage.js'
import {
  registerAccount,
  authenticate,
  authorize,
} from '../server/serverAccounts.js'

const clientAccount = { current: null }

function setCurrentAccount(clientAccountCurrent) {
  clientAccount.current = clientAccountCurrent
}
function getCurrentAccountAddress() {
  return clientAccount.current?.email
}

function clientRegister(account) {
  const signUp = registerAccount(account)
  if (signUp) {
    console.log('Регистрация удалась!')
    return true
  } else {
    return false
  }
}

function clientAuthenticate(auth) {
  const authResult = authenticate(auth)
  if (authResult) {
    console.log('Прошли успешно authenticate')
    saveSessionId(authResult)
    return true
  } else {
    console.log('Authenticate не удался')
    return false
  }
}

function clientAuthorize() {
  const sessionId = restoreSessionId()
  if (sessionId) {
    const authResult = authorize(sessionId)
    if (authResult) {
      setCurrentAccount(authResult)
      console.log('Вход успешный!', getCurrentAccountAddress())
      return true
    } else {
      return false
    }
  } else {
    return false
  }
}

export {
  setCurrentAccount,
  getCurrentAccountAddress,
  clientAuthenticate,
  clientAuthorize,
  clientRegister,
}
