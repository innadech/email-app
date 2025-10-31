// сервер не трогаем без клиента.
// console.log(serverAccounts) // недоступен! и это хорошо!

import { saveSessionId } from '../server/localStorage.js'
import {
  registerAccount,
  authenticate,
  authorize,
} from '../server/serverAccounts.js'

const clientAccount = { current: null }

// TODO:
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
  if (isAuthorized) {
    clientAccount.current = isAuthorized
    console.log('Вход успешный!', clientAccount.current.email)
    return true
  } else {
    return false
  }
}

// TODO: getCurrentAccount
// TODO: getCurrentAccountAddress
export {
  getCurrentAccountAddress,
  clientAuthenticate,
  clientAuthorize,
  clientRegister,
}
