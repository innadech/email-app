import makeId from '../shared/makeId.js'
import { saveEmails, restoreEmails } from './localStorage.js'

const serverEmails = restoreEmails()

// function createEmail(sender, recipient, subject, text) {
//   return {
//     id: makeId(),
//     date: Date.now(),
//     sender: sender,
//     recipient: recipient,
//     subject: subject,
//     text: text,
//   }
// }

function createEmail(sender, email) {
  return {
    id: makeId(),
    date: Date.now(),
    sender: sender,
    recipient: email.recipient,
    subject: email.subject,
    text: email.text,
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

// function sendEmail(sender, recipient, subject, text) {
//   const email = createEmail(sender, recipient, subject, text)
//   // проверить что аккаунт отправителя создан
//   // проверить что аккаунт отправителя залогинен
//   // проверить что аккаунт получателя создан
//   // проверить письмо на уникальность
//   serverEmails.push(email)
//   saveEmails(serverEmails)
//   return true // false // может лучше отправлять статус
// }

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

// sendEmail('inna@gmail.com', 'ivan@gmail.com', 'visa', 'visa is good')
// serverEmails
