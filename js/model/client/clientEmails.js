import { getCurrentAccountAddress } from './clientAccount.js'
import {
  sendEmail,
  receiveEmailsIncoming,
  receiveEmailsOutcoming,
} from '../server/serverEmails.js'

let clientInbox = [] // всё что прилошло с сервера запихиваем сюда. а потом уже разгребаем
let clientOutbox = []

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

function clientReceiveIncoming() {
  const currentAddress = getCurrentAccountAddress()
  if (currentAddress) {
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

function findContactByQuery(query, emails) {
  const findedEmail = emails.filter(
    email =>
      email.firstname ||
      email.lastname.includes(query) ||
      email.email.includes(query)
  )
  return findedEmail
}
function getEmailById(id, emails) {
  const findedEmail = emails.find(email => email.id === id)
  return findedEmail
}

function parseAddresses() {
  return Array.from(
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
}

export {
  parseAddresses,
  clientInbox,
  clientOutbox,
  clientSend,
  clientReceiveIncoming,
  clientReceiveOutcoming,
  getEmailById,
  findContactByQuery,
}
