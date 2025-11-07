import {
  handleLoadPageCompose,
  handleClientSend,
} from '../controller/controller-compose.js'
import { handleLoadNavbar } from '../controller/controller-navbar.js'

elFormCompose.onsubmit = onSubmitCompose
window.onload = onLoadPageCompose

function onLoadPageCompose() {
  console.log('hello')
  handleLoadPageCompose()
  handleLoadNavbar()
}

function onSubmitCompose(e) {
  e.preventDefault()
  const email = Object.fromEntries(new FormData(e.target))
  handleClientSend(email)
}

function renderComposeAccountEmail(email) {
  elAccountEmail.textContent = ''
  elAccountEmail.textContent = email
}

function renderComposeBox() {
  elComposeBox.textContent = ''
  const elH = document.createElement('h2')
  elH.textContent = 'Email is sent successful'
  elComposeBox.appendChild(elH)
}
function renderContainerCompose() {
  elContainerCompose.textContent = ''
  const elH = document.createElement('h2')
  elH.textContent = 'Please login in'
  elContainerCompose.appendChild(elH)
}

function generateContainerCompose() {
  return `<div
        id="elComposePage"
        style="height: 600px"
        class="container-fluid mt-3 bg-light-subtle border border-primary-subtle rounded-3"
      >
        <div style="height: 100%" class="row gx-5">
          <div class="col-sm-3 text-left">
            <!-- <div class="p-2 fs-5">
              <span class="material-symbols-outlined"> download </span>Inbox
            </div>
            <div class="p-2 fs-5">
              <span class="material-symbols-outlined"> star </span>Starred
            </div> -->
            <div id="elIncomeButton" class="p-2 fs-5">Inbox</div>
            <div id="elOutcomeButton" class="p-2 fs-5">Outbox</div>
            <div class="p-2 fs-5">All email</div>
            <!-- <div class="p-2 fs-5">Spam</div>
            <div class="p-2 fs-5">Trash</div> -->
          </div>
          <div class="col-sm-9 p-2">
            <!-- <div style="width: 70%; height: 50px">
              <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default"
                  >Search mail</span
                >
                <input
                  type="text"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                />
              </div>
            </div> -->
            <div
              id="elEmailsList"
              style="height: 500px"
              class="container p-4 bg-light-subtle border border-primary-subtle rounded-3"
            >
              <div style="height: 150px">
                <div>
                  <div class="input-group">
                    <span class="input-group-text" id="addon-wrapping">To</span>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Username"
                      aria-label="Username"
                      aria-describedby="addon-wrapping"
                    />
                  </div>
                  <div class="input-group">
                    <span class="input-group-text" id="basic-addon1">From</span>
                    <span class="form-control"></span>
                  </div>
                  <div class="input-group">
                    <span class="input-group-text" id="addon-wrapping"
                      >Subject</span
                    >
                    <input type="text" class="form-control" />
                  </div>
                </div>
              </div>
              <div style="width: 100%; height: 250px">
                <!-- <p class="fs-3">Text</p> -->
                <div class="form-floating">
                  <textarea
                    class="form-control"
                    placeholder="Leave a comment here"
                    id="floatingTextarea2"
                    style="height: 200px"
                  ></textarea>
                  <label for="floatingTextarea2">Message</label>
                </div>
              </div>
              <div style="width: 20%; height: 100px">
                <div class="container overflow-hidden text-center">
                  <div class="row gx-5">
                    <div class="col">
                      <div
                        id="elSend"
                        class="p-2 bg-light-subtle border border-primary-subtle rounded-3"
                      >
                        Send
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`
}

export { renderComposeBox, renderContainerCompose, renderComposeAccountEmail }
