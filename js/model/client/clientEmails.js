import { clientAccount } from './clientAccount.js'
import {
  sendEmail,
  receiveEmailsIncoming,
  receiveEmailsOutcoming,
} from '../server/serverEmails.js'
import makeId from '../shared/makeId.js'

let clientInbox = [] // всё что прилошло с сервера запихиваем сюда. а потом уже разгребаем
let clientOutbox = []

function clientSend(recipient, subject, text) {
  if (clientAccount.current) {
    const isOk = sendEmail(
      clientAccount.current.email,
      recipient,
      subject,
      text
    )
    if (isOk) {
      console.log('Письмо успешно отправлено!')
      console.log(clientOutbox)
    } else {
      console.log('Ошибка при отпавке!')
    }
  } else {
    console.log('Сначала залогиньтесь!')
  }
}

function clientReceiveIncoming() {
  if (clientAccount.current) {
    clientInbox = receiveEmailsIncoming(clientAccount.current.email)
    console.log('Входящие письма успешно получны')
    console.log(clientInbox)
    console.log(addresses)
  } else {
    console.log('Сначала залогиньтесь!')
  }
}

function clientReceiveOutcoming() {
  if (clientAccount.current) {
    clientOutbox = receiveEmailsOutcoming(clientAccount.current.email)
    console.log('Исходящие письма успешно получны')
    console.log(clientInbox)
  } else {
    console.log('Сначала залогиньтесь!')
  }
}

// function findContactByQuery(query, emails) {
//   const findedEmail = emails.filter(
//     email =>
//       email.firstName ||
//       email.lastName.includes(query) ||
//       email.email.includes(query)
//   )
//   return findedEmail
// }
function getEmailById(id, emails) {
  const findedEmail = emails.find(email => email.id === id)
  return findedEmail
}

let addresses = Array.from(
  new Map([
    ...clientInbox.map(email => [
      email.recipient,
      { id: email.id, email: email.recipient },
    ]),
    ...clientOutbox.map(email => [
      email.sender,
      { id: email.id, email: email.sender },
    ]),
  ]).values()
)

export {
  addresses,
  clientInbox,
  clientOutbox,
  clientSend,
  clientReceiveIncoming,
  clientReceiveOutcoming,
  getEmailById,
  // findContactByQuery,
}
