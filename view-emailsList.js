// import {
//   handleClientReceiveIncoming,
//   handleClientReceiveOutcoming,
// } from './controller-emailsList.js'

// elIncomeButton.onclick = onClickButtonIncome
// elOutcomeButton.onclick = onClickButtonOutcome

// function onClickButtonIncome() {
//   handleClientReceiveIncoming()
// }
// function onClickButtonOutcome() {
//   handleClientReceiveOutcoming()
// }

// function renderEmailsList(emails) {
//   elEmailsList.innerHTML = ''
//   for (const email of emails) {
//     const elGenerateEmail = generateEmail(email)
//     elEmailsList.appendChild(elGenerateEmail)
//   }
// }

// function generateEmail(email) {
//   const elDivContainerWrap = document.createElement('div')
//   const elDivContainer = document.createElement('div')
//   const elDivRow = document.createElement('div')
//   const elDivCol = document.createElement('div')
//   const elDivColSecond = document.createElement('div')
//   const elDivColThird = document.createElement('div')
//   const elDivFormCheck = document.createElement('div')
//   const elDivFormCheckInput = document.createElement('input')
//   const elDivFormCheckLabel = document.createElement('label')

//   elDivContainerWrap.onclick = onClickElDivContainerWrapEmail

//   elDivContainerWrap.classList.add('shadow-none')
//   elDivContainerWrap.classList.add('p-2')
//   elDivContainerWrap.classList.add('mb-1')
//   elDivContainerWrap.classList.add('rounded')
//   elDivContainerWrap.classList.add('bg-body-tertiary')
//   elDivContainerWrap.setAttribute('id', email.id)

//   elDivContainer.classList.add('container')
//   elDivContainer.classList.add('text-center')

//   elDivRow.classList.add('row')
//   elDivRow.classList.add('align-items-center')

//   elDivCol.classList.add('col')
//   elDivColSecond.classList.add('col')
//   elDivColThird.classList.add('col')

//   elDivFormCheck.classList.add('form-check')
//   elDivFormCheckInput.classList.add('form-check-input')
//   elDivFormCheckInput.setAttribute('type', 'checkbox')
//   elDivFormCheckInput.setAttribute('id', email.id)
//   elDivFormCheckLabel.classList.add('form-check-label')
//   // elDivFormCheckLabel.setAttribute('for', 'checkDefault')

//   elDivColSecond.textContent = email.subject
//   elDivColThird.textContent = email.date
//   elDivFormCheckLabel.textContent = email.recipient
//   elDivContainerWrap.appendChild(elDivContainer)
//   elDivContainer.appendChild(elDivRow)
//   elDivRow.appendChild(elDivCol)
//   elDivRow.appendChild(elDivColSecond)
//   elDivRow.appendChild(elDivColThird)
//   elDivCol.appendChild(elDivFormCheck)
//   elDivFormCheck.appendChild(elDivFormCheckInput)
//   elDivFormCheck.appendChild(elDivFormCheckLabel)

//   return elDivContainerWrap
// }
// export { renderEmailsList }
