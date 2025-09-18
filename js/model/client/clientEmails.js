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

// const addresses = Array.from(
//   new Map(
//     [...clientInbox, ...clientOutbox].map(item => [item.email, { id: item.id, email: item.email }])
//   ).values()
// )
// Объяснение:
// •  [...clientInbox, ...clientOutbox  ] объединяет оба массива в один.
// outgoing идёт первым, чтобы его id перезаписывал incoming
// •  .map(item => [item.email, { id: item.id, email: item.email }]) создаёт массив пар [email, { id, email }].
// •  new Map() использует email как ключ, сохраняя только последнее вхождение для каждого email (удаляя дубликаты).
// •  Array.from(...values()) преобразует значения Map в массив объектов { id, email }.

// const addresses = [
//   ...new Set([
//     ...clientInbox.map(email => email.recipient),
//     ...clientOutbox.map(email => email.sender),
//   ]),
// ]
// Объяснение:
// •  incoming.map(item => item.email) извлекает email из каждого объекта в clientInbox.
// •  Аналогично для clientOutbox.
// •  ... (spread) объединяет два массива в один.
// •  new Set() создаёт коллекцию уникальных значений, удаляя дубликаты.
// •  ...new Set() преобразует Set обратно в массив.

export {
  addresses,
  clientInbox,
  clientOutbox,
  clientSend,
  clientReceiveIncoming,
  clientReceiveOutcoming,
  getEmailById,
}
