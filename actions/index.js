export const GET_DECKS = "GET_DECKS";
export const ADD_DECK = "ADD_DECK";
export const ADD_CARD = "ADD_CARD";
export const DEL_DECK = "DEL_DECK";

export function receiveDecks(decks) {
  return {
    type: GET_DECKS,
    decks
  };
}

export function addNewDeck(deck) {
  return {
    type: ADD_DECK,
    deck
  };
}

export function addNewCard(title, card) {
  return {
    type: ADD_CARD,
    title,
    card
  };
}

export function deleteDeckInStore(deckName) {
  return {
    type: DEL_DECK,
    deckName
  };
}
