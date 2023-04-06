var receiveMessageButton = document.querySelector('#receive')
var messageBox = document.querySelector('.message-box')
var affirmation = document.querySelector('#affirmation')
var mantra = document.querySelector('#mantra')



receiveMessageButton.addEventListener('click', showMessage) 

function showMessage() {
    currentMessage = ''
    if (affirmation.checked || mantra.checked) {
        if(affirmation.checked) {
            currentMessage = affirmations[getRandomIndex(affirmations)]
        } else {
            currentMessage = mantras[getRandomIndex(mantras)]
        }
        messageBox.innerHTML = `<p class = "message">${currentMessage}</p>`
    }
}

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }