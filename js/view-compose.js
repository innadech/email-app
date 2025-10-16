import {
  handleLoadPageCompose,
  handleClientSend,
} from './controller-compose.js'

elSend.onclick = onClickButtonSend
elCompose.onclick = onClickButtonCompose

// window.onload = onLoadPageCompose

// function onLoadPageCompose() {
//   handleLoadPageCompose
// }

function onClickButtonSend() {
  let recipient = document.querySelector('#elRecipient').value
  let subject = document.querySelector('#elSubject').value
  let text = document.querySelector('#elText').value
  handleClientSend(recipient, subject, text)
}

function onClickButtonCompose() {
  handleLoadPageCompose()
}
function renderSendPage() {
  elSendPage.textContent = ''
  const elH = document.createElement('h2')
  elH.textContent = 'Email is sent successful'
  elSendPage.appendChild(elH)
}
function redirectToCompose() {
  window.location.href = './compose.html'
}
function renderPageCompose() {
  elComposePage.textContent = ''
  const elH = document.createElement('h2')
  elH.textContent = 'Please login in'
  elComposePage.appendChild(elH)
}

export { renderSendPage, redirectToCompose, renderPageCompose }
