import makeId from '../shared/makeId.js'
import {
  saveAccounts,
  restoreAccounts,
  saveSessions,
  restoreSessions,
  saveSessionId,
  restoreSessionId,
} from './localStorage.js'
// import * as x from './localStorage.js'
// console.log(x)

const serverAccounts = restoreAccounts()

function createAccount(email, passwd, firstName, lastName) {
  return {
    id: makeId(),
    date: Date.now(),
    email: email,
    passwd: passwd,
    firstName: firstName,
    lastName: lastName,
    // isLoggedIn: false,
  }
}

function registerAccount(email, passwd, firstName, lastName) {
  const account = createAccount(email, passwd, firstName, lastName)
  const findedAccount = serverAccounts.find(a => a.email === email)
  if (findedAccount) {
    return false
  } else {
    serverAccounts.push(account)
    saveAccounts(serverAccounts)
    console.log(serverAccounts)
    return true
  }

  // return true/false
}
let sessions = restoreSessions()

// function authenticate(email, passwd) {
//   const account = serverAccounts.find(
//     a => a.email === email && a.passwd === passwd
//   )
//   if (account) {
//     saveSessions(sessions)
//     saveSessionId(startSession(account.email))
//     return true
//   } else {
//     return false
//   }
// }
function authenticate(email, passwd) {
  const account = serverAccounts.find(
    a => a.email === email && a.passwd === passwd
  )
  if (account) {
    saveSessions(sessions)
    // saveSessionId(startSession(account.email))
    return startSession(account.email)
  } else {
    return false
  }
}
function authorize() {
  const email = sessions[restoreSessionId()]
  const account = serverAccounts.find(account => account.email === email)
  if (account) {
    return { email: account.email }
  }
  return false
}
function startSession(email) {
  const sessionId = Math.random()
  sessions[sessionId] = email
  return sessionId
}

export { registerAccount, authenticate, authorize }
