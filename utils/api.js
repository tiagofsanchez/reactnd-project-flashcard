import { AsyncStorage } from "react-native";

//getDecks will get us the decks[DONE]
//getDeck will give us all the info of that deck [do we need this?]
//saveDeck will save a new deck [DONE]
//addCardToDeck will save the {question, answer} to that deck title

const DECK_STORAGE_KEY = "Flashcards:decks";

export function getDecks() {
  return AsyncStorage.getItem(DECK_STORAGE_KEY).then(results => {
    console.log(JSON.parse(results));
    return JSON.parse(results);
  });
}

export function saveDeck(title) {
  return AsyncStorage.mergeItem(
    DECK_STORAGE_KEY,
    JSON.stringify({
      [title]: { [title]: title }
    })
  );
}

export function saveCardToDeck(title, questions) {
  return AsyncStorage.getItem(DECK_STORAGE_KEY).then(results => {
    const data = JSON.parse(results);
  });
}

export function deleteAll() {
  return AsyncStorage.clear(DECK_STORAGE_KEY);
}
