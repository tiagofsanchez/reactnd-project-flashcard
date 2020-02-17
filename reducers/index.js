import { GET_DECKS, ADD_DECK } from "../actions";

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
          title: action.deck
        }
      };
    default:
      return state;
  }
}

export default flashcards;
