import { GET_DECKS, ADD_DECK, ADD_CARD, DEL_DECK } from "../actions";

function flashcards(state = {}, action) {
  switch (action.type) {
    case GET_DECKS:
      return {
        ...state,
        ...action.decks
      };
    case ADD_DECK:
      return {
        ...state,
        [action.deck]: {
          title: action.deck,
          questions: []
        }
      };
    case ADD_CARD:
      const { title, card } = action;
      return {
        ...state,
        [title]: {
          ...state[title],
          questions: state[title].questions.concat(card)
        }
      };
    case DEL_DECK:
      const { deckName } = action;
      const newState = delete state[deckName];
      return {
        ...newState
      };
    default:
      return state;
  }
}

export default flashcards;
