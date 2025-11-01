import makeId from '../shared/makeId.js'
import {
  saveAccounts,
  restoreAccounts,
  saveSessions,
  restoreSessions,
} from './localStorage.js'

const serverAccounts = restoreAccounts()

function createAccount(account) {
  return {
    id: makeId(),
    date: Date.now(),
    email: account.email, // address
    password: account.password,
    repeatpassword: account.repeatpassword,
    firstname: account.firstname,
    lastname: account.lastname,
  }
}

function checkAccount(a) {
  const okEmail =
    a.email && typeof a.email === 'string' && a.email.trim().length > 0
  const okPasswd = a.email && a.password === a.repeatpassword
  if (okEmail && okPasswd) return true
  return false
}

function registerAccount(account) {
  if (!checkAccount(account)) return false
  const createdAccount = createAccount(account)
  const findedAccount = serverAccounts.find(a => a.email === account.email)
  if (findedAccount) {
    return false
  } else {
    serverAccounts.push(createdAccount)
    saveAccounts(serverAccounts)
    return true
  }
}
let sessions = restoreSessions()

function getAddressByAuth(auth) {
  return serverAccounts.find(
    a => a.address === auth.address && a.password === auth.password
  ).address
}

function authenticate(auth) {
  const addressMaybe = getAddressByAuth(auth)
  if (addressMaybe) {
    const sessionId = startSession(addressMaybe.email)
    saveSessions(sessions)
    return sessionId
  } else {
    return false
  }
}

function authorize(sessionId) {
  const email = sessions[sessionId]
  const account = serverAccounts.find(account => account.email === email)
  if (account) {
    return account
  }
  return false
}

function startSession(email) {
  const sessionId = Math.random()
  sessions[sessionId] = email
  return sessionId
}

export { registerAccount, authenticate, authorize }
