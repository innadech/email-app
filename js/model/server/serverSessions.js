// логика работы с сессиями

// создание сессии
// удаление сессии
// получение accountEmail<<accountAddress>> для sessionId

import { restoreSessions, saveSessions } from './localStorage.js'

function stopSessionById(sessionId) {
  const sessions = restoreSessions()
  delete sessions[sessionId]
  saveSessions(sessions)
}

export { stopSessionById }
