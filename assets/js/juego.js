/**
 * 2C = Two of Clubs (Tréboles)
 * 2D = Two of Diamonds (Diamantes)
 * 2H = Two of Hearts (Corazones)
 * 2S = Two of Spades (Espadas)
 */

let deck = [];
const types = ['C', 'D', 'S', 'H'];
const specials = ['A', 'J', 'Q', 'K'];

// This function creates a new deck
const createDeck = () => {
  for (let i = 2; i <= 10; i++) {
    for (let type of types) {
      deck.push(i + type);
    }
  }

  for (let type of types) {
    for (let special of specials) {
      deck.push(special + type);
    }
  }

  // console.log("Before shuffle", deck);
  deck = _.shuffle(deck);
  console.log("After shuffle", deck);
  return deck;
}

createDeck();

// This function allows me to hit a card
const hitCard = () => {
  if (deck.length === 0) {
    throw 'No more cards available';
  }
  const card = deck.pop();

  console.log(deck);
  console.log(card);
  return card;
}

// for (let i = 0; i <= 100; i++) {
//   hitCard();
// }

const cardValue = (card) => {
  const value = card.substring(0, card.length - 1);
  return (isNaN(value)) ? (value === 'A') ? 11 : 10 : value * 1;
}

const value = cardValue(hitCard());
console.log(value);
