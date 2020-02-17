import { AsyncStorage } from "react-native";

//getDecks will get us the decks
//getDeck will give us all the info of that deck
//saveDeck will save a new deck
//addCardToDeck will save the {question, answer} to that deck title

export function getDecks() {
  return AsyncStorage.getItem();
}

export function saveDeck({ title }) {
  return AsyncStorage.mergeItem(
    JSON.stringify({
      [title]: title
    })
  );
}
