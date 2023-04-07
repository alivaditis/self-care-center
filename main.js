var receiveMessageButton = document.querySelector('#receive')
var messageBox = document.querySelector('.message-box')
var affirmation = document.querySelector('#affirmation')
var mantra = document.querySelector('#mantra')
var heart = document.querySelector('.heart')
var bell = document.querySelector('#bell')
var heart = document.querySelector('.heart')
var whole = document.querySelector('.whole')
var viewButton = document.querySelector('.view')
var favView = document.querySelector('.favView')
var affirmationList = document.querySelector('.affirmations')
var mantraList = document.querySelector('.mantras')

receiveMessageButton.addEventListener('click', showMessage) 
heart.addEventListener('click', favorite)
messageBox.addEventListener('click', favorite)
viewButton.addEventListener('click', toggleView)
affirmationList.addEventListener('dblclick', deleteMessage)
mantraList.addEventListener('dblclick', deleteMessage)

function showMessage() {
    currentMessage = ''
    if (affirmation.checked || mantra.checked) {
        currentMessage = createMessageObject()
        messageBox.innerHTML = `<p class = 'message'>${currentMessage.message}</p><button class="heart" type="button"> &#10084; </button>`
    }
}

savedMessages = []

function favorite(event) {
    if (event.target.classList.contains('heart')) {
      console.log('red')
        if (!savedMessages.includes(currentMessage)) {
            savedMessages.push(currentMessage)
        } 
      }
    console.log(savedMessages)
}

function displayFavs() {
    affirmationList.innerHTML = ''
    mantraList.innerHTML = ''
    for (var i = 0; i < savedMessages.length; i++)
        if (savedMessages[i].type === 'affirmation') {
            affirmationList.innerHTML += 
                `<p id = '${savedMessages[i].id}'>
                    ${savedMessages[i].message}
                </p>`}
        else {
            mantraList.innerHTML +=
                `<p id = '${savedMessages[i].id}'>
                    ${savedMessages[i].message}
                </p>`
        }
}

function createMessageObject() {
    var messageObject = {
        id: Date.now(),
        type: 'unknown',
        message: 'unknown'
        }
    if(affirmation.checked) {
            messageObject.message = affirmations[getRandomIndex(affirmations)]
            messageObject.type = 'affirmation'
        } else if (mantra.checked) {
            messageObject.message = mantras[getRandomIndex(mantras)]
            messageObject.type = 'mantra'
        }
    return messageObject
}

function deleteMessage(event) {
    for (var i = 0; i < savedMessages.length; i++) {
      if (event.target.id == savedMessages[i].id) {
         savedMessages.splice(i,1);
      }
    } 
    console.log(savedMessages)
    displayFavs()
  }

function toggleView() {
    whole.classList.toggle('hidden')
    favView.classList.toggle('hidden')
    if (whole.classList.contains('hidden')) {
        viewButton.innerText = 'Home'
    }
    if (favView.classList.contains('hidden')) {
        viewButton.innerText = 'View Favorites'
    }
    displayFavs()
}

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }