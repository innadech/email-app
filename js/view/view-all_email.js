import {
  handleEmailSheet,
  handleLoadPageAllEmail,
  handleClientReceiveIncoming,
  handleClientReceiveOutcoming,
} from '../controller/controller-all_email.js'

window.onload = onLoadPageAllEmail
elIncomeButton.onclick = onClickButtonIncome
elOutcomeButton.onclick = onClickButtonOutcome

function onLoadPageAllEmail() {
  handleLoadPageAllEmail()
}
function onClickButtonIncome() {
  handleClientReceiveIncoming()
}
function onClickButtonOutcome() {
  handleClientReceiveOutcoming()
}
function onClickElDivContainerWrapEmail(e) {
  const id = e.target.closest('.shadow-none').getAttribute('id')
  handleEmailSheet(id)
}

function renderelAllEmailBox() {
  // elAllEmailBox.classList.remove('d-none')
  elAllEmailBox.textContent = ''
  const elH = document.createElement('h2')
  elH.textContent = 'Please Login'
  elAllEmailBox.appendChild(elH)
}

function renderEmailsListEmailSheet(email) {
  elEmailsList.classList.remove('d-none')
  elEmailsList.innerHTML = ''
  const elGenerateEmailSheet = generateEmailSheet(email)
  elEmailsList.appendChild(elGenerateEmailSheet)
}

function generateEmailSheet(email) {
  const elDivReceivedPage = document.createElement('div')
  const elDivWrapFirst = document.createElement('div')
  const elDivWrapFirstWrapDelivery = document.createElement('div')
  const elDivWrapFirstPDelivery = document.createElement('p')
  const elDivWrapFirstWrapFrom = document.createElement('div')
  const elSpanWrapFrom = document.createElement('span')
  const elSpanWrapFromSpanFirst = document.createElement('span')
  const elSpanWrapFromSpanSecond = document.createElement('span')
  const elDivWrapSecond = document.createElement('div')
  const elDivWrapSecondP = document.createElement('p')
  const elDivWrapThird = document.createElement('div')
  const elDivThird = document.createElement('div')
  const elDivThirdRow = document.createElement('div')
  const elDivThirdRowColFirst = document.createElement('div')
  const elDivThirdRowColFirstDiv = document.createElement('div')
  const elDivThirdRowColSecond = document.createElement('div')
  const elDivThirdRowColSecondDiv = document.createElement('div')

  elDivReceivedPage.classList.add('container')
  elDivReceivedPage.classList.add('p-4')
  elDivReceivedPage.classList.add('bg-light-subtle')
  elDivReceivedPage.classList.add('border')
  elDivReceivedPage.classList.add('border-primary-subtle')
  elDivReceivedPage.classList.add('rounded-3')
  elDivReceivedPage.setAttribute('height', '500px')

  elDivWrapFirst.setAttribute('height', '100px')
  elDivWrapFirst.setAttribute('width', '50%')
  elDivWrapFirstPDelivery.classList.add('fs-2')
  elDivWrapFirstPDelivery.textContent = email.subject
  elSpanWrapFrom.textContent = 'From'
  elSpanWrapFromSpanFirst = email.sender
  elSpanWrapFromSpanSecond = email.name

  elDivWrapSecond.setAttribute('height', '300px')
  elDivWrapSecond.setAttribute('width', '100%')
  elDivWrapSecondP.classList.add('fs-3')
  elDivWrapSecondP.textContent = email.text

  elDivWrapThird.setAttribute('height', '100px')
  elDivWrapFirst.setAttribute('width', '50%')
  elDivThird.classList.add('container')
  elDivThird.classList.add('overflow-hidden')
  elDivThird.classList.add('text-center')
  elDivThirdRow.classList.add('row')
  elDivThirdRow.classList.add('gx-5')
  elDivThirdRowColFirst.classList.add('col')
  elDivThirdRowColFirstDiv.classList.add('p-2')
  elDivThirdRowColFirstDiv.classList.add('bg-light-subtle')
  elDivThirdRowColFirstDiv.classList.add('border')
  elDivThirdRowColFirstDiv.classList.add('border-primary-subtle')
  elDivThirdRowColFirstDiv.classList.add('rounded-3')
  elDivThirdRowColFirstDiv.textContent = 'Answer'
  elDivThirdRowColSecond.classList.add('col')
  elDivThirdRowColSecondDiv.classList.add('p-2')
  elDivThirdRowColSecondDiv.classList.add('bg-light-subtle')
  elDivThirdRowColSecondDiv.classList.add('border')
  elDivThirdRowColSecondDiv.classList.add('border-primary-subtle')
  elDivThirdRowColSecondDiv.classList.add('rounded-3')
  elDivThirdRowColSecondDiv.textContent = 'Forward'

  elDivReceivedPage.appendChild(elDivWrapFirst)
  elDivReceivedPage.appendChild(elDivWrapFirst)
  elDivWrapFirst.appendChild(elDivWrapFirstWrapDelivery)
  elDivWrapFirstWrapDelivery.appendChild(elDivWrapFirstPDelivery)
  elDivWrapFirst.appendChild(elDivWrapFirstWrapFrom)
  elDivWrapFirstWrapFrom.appendChild(elSpanWrapFromSpanFirst)
  elDivWrapFirstWrapFrom.appendChild(elSpanWrapFromSpanSecond)
  elDivReceivedPage.appendChild(elDivWrapSecond)
  elDivWrapSecond.appendChild(elDivWrapSecondP)
  elDivReceivedPage.appendChild(elDivWrapThird)
  elDivWrapThird.appendChild(elDivThird)
  elDivThird.appendChild(elDivThirdRow)
  elDivThirdRow.appendChild(elDivThirdRowColFirst)
  elDivThirdRowColFirst.appendChild(elDivThirdRowColFirstDiv)
  elDivThirdRow.appendChild(elDivThirdRowColSecond)
  elDivThirdRowColSecond.appendChild(elDivThirdRowColSecondDiv)

  return elDivReceivedPage
}

function renderEmailsList(emails) {
  elEmailsList.classList.remove('d-none')
  elEmailsList.innerHTML = ''
  for (const email of emails) {
    const elGenerateEmail = generateEmail(email)
    elEmailsList.appendChild(elGenerateEmail)
  }
}

function generateEmail(email) {
  const elDivContainerWrap = document.createElement('div')
  const elDivContainer = document.createElement('div')
  const elDivRow = document.createElement('div')
  const elDivCol = document.createElement('div')
  const elDivColSecond = document.createElement('div')
  const elDivColThird = document.createElement('div')
  const elDivFormCheck = document.createElement('div')
  const elDivFormCheckInput = document.createElement('input')
  const elDivFormCheckLabel = document.createElement('label')

  elDivContainerWrap.onclick = onClickElDivContainerWrapEmail

  elDivContainerWrap.classList.add('shadow-none')
  elDivContainerWrap.classList.add('p-2')
  elDivContainerWrap.classList.add('mb-1')
  elDivContainerWrap.classList.add('rounded')
  elDivContainerWrap.classList.add('bg-body-tertiary')
  elDivContainerWrap.setAttribute('id', email.id)

  elDivContainer.classList.add('container')
  elDivContainer.classList.add('text-center')

  elDivRow.classList.add('row')
  elDivRow.classList.add('align-items-center')

  elDivCol.classList.add('col')
  elDivColSecond.classList.add('col')
  elDivColThird.classList.add('col')

  elDivFormCheck.classList.add('form-check')
  elDivFormCheckInput.classList.add('form-check-input')
  elDivFormCheckInput.setAttribute('type', 'checkbox')
  elDivFormCheckInput.setAttribute('id', email.id)
  elDivFormCheckLabel.classList.add('form-check-label')
  // elDivFormCheckLabel.setAttribute('for', 'checkDefault')

  elDivColSecond.textContent = email.subject
  elDivColThird.textContent = email.date
  elDivFormCheckLabel.textContent = email.recipient
  elDivContainerWrap.appendChild(elDivContainer)
  elDivContainer.appendChild(elDivRow)
  elDivRow.appendChild(elDivCol)
  elDivRow.appendChild(elDivColSecond)
  elDivRow.appendChild(elDivColThird)
  elDivCol.appendChild(elDivFormCheck)
  elDivFormCheck.appendChild(elDivFormCheckInput)
  elDivFormCheck.appendChild(elDivFormCheckLabel)

  return elDivContainerWrap
}
export { renderEmailsListEmailSheet, renderEmailsList, renderelAllEmailBox }
