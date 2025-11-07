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
function renderelEmailsListAddress(emails) {
  elEmailsList.classList.remove('d-none')
  elEmailsList.innerHTML = ''
  for (const email of emails) {
    const elGenerateAddress = generateAddress(email)
    elEmailsList.appendChild(elGenerateAddress)
  }
}

function generateAddress(email) {
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
  elDivFormCheckInput.setAttribute('id', email.id)
  elDivFormCheckLabel.classList.add('form-check-label')
  // elDivFormCheckLabel.setAttribute('for', 'checkDefault')

  elDivColSecond.textContent = email.email
  elDivFormCheckLabel.textContent = email.id

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

export { renderelEmailsListAddress, renderContainerAddress }
