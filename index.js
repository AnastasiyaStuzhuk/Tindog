import dogsData from './data.js'
import Dog from './Dog.js'

let isWaiting = false

function getNewDog() {
  const nextDogData = dogsData.shift()
  return nextDogData ? new Dog(nextDogData) : {}
}

const render = () =>
  document.getElementById("card-container").innerHTML = currentDog.getDogHtml()

function handleLike() {
  currentDog.setMatchStatus(true)
  handleAction()
}

function handleReject() {
  currentDog.setMatchStatus(false)
  handleAction()
}

function handleAction() {
  if (isWaiting) {
    return
  }

  render()
  isWaiting = true

  setTimeout(() => {
    if (dogsData.length > 0) {
      currentDog = getNewDog()
      render()
    } else {
      getFinalPageHtml()
    }
    isWaiting = false
    document.activeElement.blur();
  }, 1500)
}

function getFinalPageHtml() {
  document.getElementById("main-content").innerHTML = `
    <div class="message">
      <h2 class="message__title">There are no more dogs in your area</h2>
      <img class="message__img" src="images/dog-final.gif" width="250" height="267" alt="Surprised dog">
    </div>`
}

let currentDog = getNewDog()
render()

document.getElementById("button-accept").addEventListener("click", handleLike)
document.getElementById("button-reject").addEventListener("click", handleReject)