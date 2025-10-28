function saveAccounts(accounts) {
  const stringifiedAccounts = JSON.stringify(accounts)
  localStorage.setItem('accounts', stringifiedAccounts)
}
function restoreAccounts() {
  const stringifiedAccounts = localStorage.getItem('accounts')
  const parsedAccounts = JSON.parse(stringifiedAccounts)
  return parsedAccounts ?? []
}
function saveEmails(emails) {
  const stringifiedEmails = JSON.stringify(emails)
  localStorage.setItem('emails', stringifiedEmails)
}
function restoreEmails() {
  const stringifiedEmails = localStorage.getItem('emails')
  const parsedEmails = JSON.parse(stringifiedEmails)
  return parsedEmails ?? []
}

function saveSessions(sessions) {
  const stringifiedSessions = JSON.stringify(sessions)
  localStorage.setItem('sessions', stringifiedSessions)
}
function restoreSessions() {
  const stringifiedSessions = localStorage.getItem('sessions')
  const parsedSessions = JSON.parse(stringifiedSessions)
  return parsedSessions ?? {}
}

function saveSessionId(sessionId) {
  sessionStorage.setItem('sessionId', sessionId)
}

function restoreSessionId() {
  return sessionStorage.getItem('sessionId')
}
function removeSessionId() {
  sessionStorage.removeItem('sessionId')
}

export {
  saveAccounts,
  restoreAccounts,
  saveSessions,
  restoreSessions,
  saveSessionId,
  restoreSessionId,
  saveEmails,
  restoreEmails,
  removeSessionId,
}
