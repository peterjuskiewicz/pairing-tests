// define card and player classes

class Card {

  constructor(rank, suite){
    this.rank = rank
    this.suite = suite
  }

  get pointValue(){
    if(typeof(this.rank) === 'number') {
      return this.rank
    }
    else if(this.rank === 'Ace') {
      return 11
    }
    else {
      return 10
    }
  }
}


class Player {

  constructor(name){
    this.name = name
    this.hand = []
    this.takeCard = (deck) => {
      this.hand.push(deck.pop())
    }
  }

  get handScore(){
    return this.hand.map(card => card.pointValue).reduce((accumulator, currentValue) => accumulator + currentValue)
  }

  get hasBlackjack(){
      return this.handScore === 21
  }

}

// create a deck of cards

const suite = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
const rank = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace']

const deck = []

for(let i = 0; i < suite.length; i++){
  for(let j = 0; j < rank.length; j++){
    deck.push(new Card(rank[j], suite[i]))
  }
}

// shuffle cards

deck.sort(() => {return 0.5 - Math.random()})

// set 2 players

const player1 = new Player('Dealer')
const player2 = new Player('Sam')

// deal 2 cards to each player

player1.takeCard(deck)
player1.takeCard(deck)

player2.takeCard(deck)
player2.takeCard(deck)

// simple game engine
playTheGame = () => {

  do {
    player1.takeCard(deck)
  } while (player1.handScore <= 17)

  if (player1.handScore > 21) {
    console.log(player1.name + ' has lost the game')
    return
  }
  else{
    do {
      player2.takeCard(deck)
    } while (player2.handScore <= 17)

    if (player2.handScore > 21) {
      console.log(player2.name + ' has lost the game')
      return
    }
  }

  player1.handScore > player2.handScore ? console.log(player1.name + ' wins') : console.log(player2.name + ' wins')


}

console.log(deck.length)

playTheGame()






