let deckId
let computerScore = 0
let personalScore = 0
const drawCardsButton = document.getElementById("draw-cards")
function handleClick() {
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
        .then(res => res.json())
        .then(data => {
            console.log(data.remaining)
            deckId = data.deck_id})
}

document.getElementById("new-deck").addEventListener("click", handleClick)
drawCardsButton.addEventListener("click", () => {
    fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
        .then(res => res.json())
        .then(data => {
            document.getElementById('home').innerHTML = `<img class='card' src="${data.cards[0].image}" />`
            document.getElementById('player').innerHTML = `<img class='card' src="${data.cards[1].image}" />`
            document.getElementById('message').textContent = determineCardWinner(data.cards[0], data.cards[1])
            if (data.remaining === 0) {
                drawCardsButton.disabled = true
                if (computerScore > personalScore) {
                    document.getElementById('message').textContent = "El computador gana la partida"
                } else if (computerScore < personalScore) {
                    document.getElementById('message').textContent = "Tu ganas la partida"
                } else {
                    document.getElementById('message').textContent = "La partida termina igualada"
                }
            }
            })
})

function determineCardWinner(card1, card2) {
    const valueOptions = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "JACK", "QUEEN", "KING", "ACE"]
    const card1ValueIndex = valueOptions.indexOf(card1.value)
    const card2ValueIndex = valueOptions.indexOf(card2.value)
    
    if (card1ValueIndex > card2ValueIndex) {
        computerScore++
        document.getElementById('computer-score').textContent = `Computer Score: ${computerScore}`
        return "Computer wins!"
    } else if (card1ValueIndex < card2ValueIndex) {
        personalScore++
        document.getElementById('person-score').textContent = `Person Score: ${computerScore}`
        return "You wins!"
    } else {
        return "War!"
    }
}