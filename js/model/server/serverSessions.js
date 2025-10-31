// логика работы с сессиями

// создание сессии
// удаление сессии
// получение accountEmail<<accountAddress>> для sessionId

import { restoreSessions, saveSessions } from './localStorage.js'

let sessions = restoreSessions()

function stopSessionById(sessionId) {
  delete sessions[sessionId]
  saveSessions(sessions)
}
