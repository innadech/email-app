// сервер не трогаем без клиента.
// console.log(serverAccounts) // недоступен! и это хорошо!

import { saveSessionId } from '../client/sessionStorage.js'
import {
  registerAccount,
  authenticate,
  authorize,
} from '../server/serverAccounts.js'

const clientAccount = { current: null }

function getCurrentAccount() {
  return clientAccount.current
}
function getCurrentAccountAddress() {
  return clientAccount.current.address
}

function clientRegister(account) {
  const signUp = registerAccount(account)
  if (signUp) {
    console.log('регистрация удалась!')
    return true
  } else {
    return false
  }
}

function clientAuthenticate(account) {
  const isauthenticated = authenticate(account)
  if (isauthenticated) {
    console.log(' прошли успешно authenticate')
    saveSessionId(isauthenticated)
    return true
  } else {
    console.log('не прошли успешно authenticate')
    return false
  }
}
function clientAuthorize() {
  const isAuthorized = authorize()
  const currentAccount = getCurrentAccount()
  if (isAuthorized) {
    currentAccount = isAuthorized
    console.log('Вход успешный!', clientAccount.current.email)
    return true
  } else {
    return false
  }
}

export {
  getCurrentAccount,
  getCurrentAccountAddress,
  clientAuthenticate,
  clientAuthorize,
  clientRegister,
}
