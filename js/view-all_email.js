import { handleEmailSheet } from './controller.js'

function onClickElDivContainerWrapEmail(e) {
  console.log(e.target.tagName)
  const id = e.target.closest('.shadow-none').getAttribute('id')
  console.log(id)
  handleEmailSheet(id)
}

function renderEmailsListEmailSheet(email) {
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
export { renderEmailsListEmailSheet }
