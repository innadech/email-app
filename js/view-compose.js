import { handleLoadPageCompose } from './controller.js'

elSend.onclick = onClickButtonSend

window.onload = onLoadPageCompose

function onLoadPageCompose() {
  handleLoadPageCompose
}

function onClickButtonSend() {
  let recipient = document.querySelector('#elRecipient').value
  let subject = document.querySelector('#elSubject').value
  let text = document.querySelector('#elText').value
  handleClientSend(recipient, subject, text)
}
function renderSendPage() {
  elSendPage.textContent = ''
  const elH = document.createElement('h2')
  elH.textContent = 'Email is sent successful'
  elSendPage.appendChild(elH)
}

export { renderSendPage }
