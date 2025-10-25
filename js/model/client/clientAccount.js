// сервер не трогаем без клиента.
// console.log(serverAccounts) // недоступен! и это хорошо!

import { saveSessionId } from '../server/localStorage.js'
import {
  registerAccount,
  authenticate,
  authorize,
} from '../server/serverAccounts.js'

const clientAccount = { current: null }

function clientRegister(account) {
  const signUp = registerAccount(account)
  if (signUp) {
    console.log('регистрация удалась!')
    return true
  } else {
    return false
  }
}
// function clientRegister(email, passwd, firstName, lastName) {
//   const signUp = registerAccount(email, passwd, firstName, lastName)
//   if (signUp) {
//     console.log('регистрация удалась!')
//     return true
//   } else {
//     return false
//   }
// }
// function clientAuthenticate(email, password) {
//   const isauthenticated = authenticate(email, password)
//   if (isauthenticated) {
//     console.log(' прошли успешно authenticate')
//     saveSessionId(isauthenticated)
//     return true
//   } else {
//     console.log('не прошли успешно authenticate')
//     return false
//   }
// }
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

export { clientAccount, clientAuthenticate, clientAuthorize, clientRegister }

// function clientLogin(email, passwd) {
//   logout()
//   const loggedAccount = loginAccount(email, passwd)
//   if (loggedAccount) {
//     clientAccount.current = loggedAccount
//     console.log('Вход успешный!', clientAccount.current.email)
//     return true
//   } else {
//     console.log('Неправильный логин и/или пароль')
//     return false
//   }
// }

// authenticate(username, password) {
//     const account = accounts.find(
//       a => a.username === username && a.password === password
//     )
//     if (account) {
//       return this.startSession(account.username)
//     } else {
//       return false
//     }
//   },

//   authorize(sesssionId) {
//     const username = sessions[sesssionId]
//     const account = accounts.find(account => account.username === username)
//     if (account) {
//       return { username: account.username }
//     }
//     return false
//   },

// function logout() {
//   clientAccount.current = null
// }
