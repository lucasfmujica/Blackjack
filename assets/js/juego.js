/**
 * 2C = Two of Clubs (Tréboles)
 * 2D = Two of Diamonds (Diamantes)
 * 2H = Two of Hearts (Corazones)
 * 2S = Two of Spades (Espadas)
 */

let deck = [];
const types = ['C', 'D', 'S', 'H'];
const specials = ['A', 'J', 'Q', 'K'];

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

  console.log("Before shuffle", deck);
  deck = _.shuffle(deck);
  console.log("After shuffle", deck);
  return deck;
}

createDeck();
