import makeId from '../shared/makeId.js'
import { saveAccounts, restoreAccounts } from './localStorage.js'
import { getEmailBySessionId, startSession } from './serverSessions.js'

const serverAccounts = restoreAccounts()

function createAccount(regData) {
  return {
    id: makeId(),
    date: Date.now(),
    address: regData.address,
    password: regData.password,
    firstname: regData.firstname,
    lastname: regData.lastname,
  }
}

function checkRegData(a) {
  const okEmail =
    a.address && typeof a.address === 'string' && a.address.trim().length > 0
  const okPasswd = a.address && a.password && a.password === a.repeatpassword
  if (okEmail && okPasswd) return true
  console.log('неправильно заполнена форма регистрации')
  return false
}

function registerAccount(regData) {
  if (!checkRegData(regData)) return false
  const createdAccount = createAccount(regData)
  const findedAccount = serverAccounts.find(a => a.address === regData.address)
  if (findedAccount) {
    return false
  } else {
    serverAccounts.push(createdAccount)
    saveAccounts(serverAccounts)
    return true
  }
}

function getAddressByAuth(auth) {
  const findedAccount = serverAccounts.find(
    a => a.address === auth.address && a.password === auth.password
  )

  console.log('>>', findedAccount)

  if (findedAccount === undefined) {
    return undefined
  } else {
    return findedAccount.address
  }
}

function authenticate(auth) {
  console.log('###', auth)
  const addressMaybe = getAddressByAuth(auth)
  console.log('>>>', addressMaybe)
  if (addressMaybe) {
    const sessionId = startSession(addressMaybe)
    return sessionId
  } else {
    return false
  }
}

function authorize(sessionId) {
  const address = getEmailBySessionId(sessionId)
  const account = serverAccounts.find(a => a.address === address)
  if (account) {
    return account
  }
  return false
}

export { registerAccount, authenticate, authorize }
