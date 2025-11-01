import makeId from '../shared/makeId.js'
import { saveEmails, restoreEmails } from './localStorage.js'

const serverEmails = restoreEmails()

function createEmail(sender, emailData) {
  return {
    id: makeId(),
    date: Date.now(),
    sender: sender,
    recipient: emailData.recipient,
    subject: emailData.subject,
    text: emailData.text,
  }
}

function sendEmail(sender, email) {
  const createdEmail = createEmail(sender, email)
  // проверить что аккаунт отправителя создан
  // проверить что аккаунт отправителя залогинен
  // проверить что аккаунт получателя создан
  // проверить письмо на уникальность
  serverEmails.push(createdEmail)
  saveEmails(serverEmails)
  return true // false // может лучше отправлять статус
}

function receiveEmailsIncoming(email) {
  // проверить что аккаунт получателя создан
  // проверить что аккаунт получателя залогинен
  // удалить письма с сервера, которые получены получателем
  // либо можно пометить их как "полученные"
  return serverEmails.filter(se => se.recipient === email)
  // ??? return false
}

function receiveEmailsOutcoming(email) {
  return serverEmails.filter(se => se.sender === email)
}

export { sendEmail, receiveEmailsIncoming, receiveEmailsOutcoming }
