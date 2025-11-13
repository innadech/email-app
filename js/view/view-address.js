import { handleLoadPageAddress } from '../controller/controller-address.js'
import { handleLoadNavbar } from '../controller/controller-navbar.js'

window.onload = onLoadPageAddress

function onLoadPageAddress() {
  handleLoadPageAddress()
  handleLoadNavbar()
}
function renderContainerAddress() {
  elContainerAddress.textContent = ''
  const elH = document.createElement('h2')
  elH.textContent = 'Please login in'
  elContainerAddress.appendChild(elH)
}
function renderDivCounterparties(counterparties) {
  elCounterparties.classList.remove('d-none')
  elCounterparties.innerHTML = ''
  for (const counterparty of counterparties) {
    const elGenerateAddress = generateCounterparty(counterparty)
    elCounterparties.appendChild(elGenerateAddress)
  }
}

function generateCounterparty(counterparty) {
  const elDivContainerWrap = document.createElement('div')
  const elDivContainer = document.createElement('div')
  const elDivRow = document.createElement('div')
  const elDivCol = document.createElement('div')
  const elDivColSecond = document.createElement('div')
  // const elDivColThird = document.createElement('div')
  const elDivFormCheck = document.createElement('div')
  const elDivFormCheckInput = document.createElement('input')
  const elDivFormCheckLabel = document.createElement('label')

  elDivContainerWrap.classList.add('shadow-none')
  elDivContainerWrap.classList.add('p-2')
  elDivContainerWrap.classList.add('mb-1')
  elDivContainerWrap.classList.add('rounded')
  elDivContainerWrap.classList.add('bg-body-tertiary')

  elDivContainer.classList.add('container')
  elDivContainer.classList.add('text-center')

  elDivRow.classList.add('row')
  elDivRow.classList.add('align-items-center')

  elDivCol.classList.add('col')
  elDivColSecond.classList.add('col')
  // elDivColThird.classList.add('col')

  elDivFormCheck.classList.add('form-check')
  elDivFormCheckInput.classList.add('form-check-input')
  elDivFormCheckInput.setAttribute('type', 'checkbox')
  elDivFormCheckInput.setAttribute('id', counterparty.id)
  elDivFormCheckLabel.classList.add('form-check-label')
  // elDivFormCheckLabel.setAttribute('for', 'checkDefault')

  elDivColSecond.textContent = counterparty.address
  // elDivFormCheckLabel.textContent = counterparty.id

  // elDivColThird.textContent = email.date

  elDivContainerWrap.appendChild(elDivContainer)
  elDivContainer.appendChild(elDivRow)
  elDivRow.appendChild(elDivCol)
  elDivRow.appendChild(elDivColSecond)
  // elDivRow.appendChild(elDivColThird)
  elDivCol.appendChild(elDivFormCheck)
  elDivFormCheck.appendChild(elDivFormCheckInput)
  elDivFormCheck.appendChild(elDivFormCheckLabel)

  return elDivContainerWrap
}

export { renderDivCounterparties, renderContainerAddress }
