function saveSessionId(sessionId) {
  sessionStorage.setItem('sessionId', sessionId)
}

function restoreSessionId() {
  return sessionStorage.getItem('sessionId')
}

function removeSessionId() {
  sessionStorage.removeItem('sessionId')
}

export { saveSessionId, restoreSessionId, removeSessionId }
