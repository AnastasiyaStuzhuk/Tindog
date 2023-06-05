import dogs from './data.js'
import Dog from './Dog.js'

function getNewDog() {
  const nextDogData = dogs.shift()
  return nextDogData ? new Dog(nextDogData) : {}
}

const render = () => 
  document.getElementById("main-container").innerHTML = dog.getDogHtml()

let dog = getNewDog()
render()


