import { getCurrentAccountAddress } from './clientAccount.js'
import {
  sendEmail,
  receiveEmailsIncoming,
  receiveEmailsOutcoming,
} from '../server/serverEmails.js'

let clientInbox = [] // всё что пришло с сервера запихиваем сюда. а потом уже разгребаем
let clientOutbox = []

window.clientInbox = clientInbox
window.clientOutbox = clientOutbox

let clientAll = () => [...clientInbox, ...clientOutbox]

function clientSend(email) {
  const senderAddress = getCurrentAccountAddress()
  if (senderAddress) {
    const isOk = sendEmail(senderAddress, email)
    if (isOk) {
      console.log('Письмо успешно отправлено!')
    } else {
      console.log('Ошибка при отпавке!')
    }
  } else {
    console.log('Сначала залогиньтесь!')
  }
}

window.clientReceiveIncoming = clientReceiveIncoming

function clientReceiveIncoming() {
  const currentAddress = getCurrentAccountAddress()
  if (currentAddress) {
    // ссылка обновляется!!
    clientInbox = receiveEmailsIncoming(currentAddress)
    console.log('Входящие письма успешно получны')
  } else {
    console.log('Сначала залогиньтесь!')
  }
}

function clientReceiveOutcoming() {
  const currentAddress = getCurrentAccountAddress()
  if (currentAddress) {
    clientOutbox = receiveEmailsOutcoming(currentAddress)
    console.log('Исходящие письма успешно получны')
  } else {
    console.log('Сначала залогиньтесь!')
  }
}

function filtrateEmailsByQuery(query) {
  clientReceiveIncoming()
  clientReceiveOutcoming()
  return clientAll().filter(
    email =>
      email.sender.includes(query) ||
      email.recipient.includes(query) ||
      email.subject.includes(query)
  )
}

function getEmailById(id) {
  return clientAll().find(email => email.id === id)
}

// function parseAddresses() {
//   clientReceiveIncoming()
//   clientReceiveOutcoming()
//   return Array.from(
//     new Map([
//       ...clientInbox.map(email => [
//         email.recipient,
//         { id: email.id, email: email.sender },
//       ]),
//       ...clientOutbox.map(email => [
//         email.sender,
//         { id: email.id, email: email.recipient },
//       ]),
//     ]).values()
//   )
// }

// function parseAddresses() {
//   clientReceiveIncoming()
//   clientReceiveOutcoming()
//   return [
//     ...clientInbox.map(email => ({ id: email.id, email: email.sender })),
//     ...clientOutbox.map(email => ({ id: email.id, email: email.recipient })),
//   ]
// }

function parseCounterparties() {
  clientReceiveIncoming()
  clientReceiveOutcoming()
  return [
    ...clientInbox.map(({ id, sender }) => ({ id, address: sender })),
    ...clientOutbox.map(({ id, sender }) => ({ id, address: sender })),
  ]
}

export {
  parseCounterparties,
  clientInbox,
  clientOutbox,
  clientSend,
  clientReceiveIncoming,
  clientReceiveOutcoming,
  getEmailById,
  filtrateEmailsByQuery,
}
