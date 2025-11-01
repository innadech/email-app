import { restoreSessions, saveSessions } from './localStorage.js'

function startSession(email) {
  const sessions = restoreSessions()
  const sessionId = Math.random()
  sessions[sessionId] = email
  saveSessions(sessions)
  return sessionId
}

function stopSessionById(sessionId) {
  const sessions = restoreSessions()
  delete sessions[sessionId]
  saveSessions(sessions)
}

function getEmailBySessionId(sessionId) {
  const sessions = restoreSessions()
  return sessions[sessionId]
}

export { getEmailBySessionId, startSession, stopSessionById }
