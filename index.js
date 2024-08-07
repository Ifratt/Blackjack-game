let player = {
    name: "Per",
    chips: 200,
    sayHello: function() {
        console.log("Heisann!")
    }
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips



// Make this function return a random number between 1 and 13
function getRandomCard() {
    let randomNumer =  Math.floor( Math.random()*13 ) + 1 // 1-13
    if (randomNumer > 10) {
        return 10
    } else if (randomNumer === 1) {
        return 11
    } else {
        return randomNumer
    }
}
function randerGame () {
    
    cardsEl.textContent = "Card: " 
    for(let i = 0; i < cards.length; i+=1){
        cardsEl.textContent += " "+ cards[i]
    }
    // 3. Render the sum on the page using this format -> "Sum: 14"

    sumEl.textContent = "Sum:" + sum

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}
function startGame (){
    isAlive = true
    let card1 = getRandomCard()
    let card2 = getRandomCard()
    cards = [card1, card2]
    sum = card1 + card2
    randerGame()
}


// 2. Create a function newCard() that logs out "Drawing a new card from the deck!"

function newCard(){
    // Only allow the player to get a new card if she IS alive and does NOT have Blackja
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        randerGame()        
    }

}
function reset (){
    isAlive = false
    let card1 = "N/A"
    let card2 = "N/A"
    cards = [card1, card2]
    sum = 0
    randerGame()
    

}

