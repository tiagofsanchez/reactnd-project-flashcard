import { GET_DECKS, ADD_DECK, ADD_CARD } from "../actions";

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
    case ADD_CARD:
      return {
        ...state,
        title: {
          ...state[action.title],
          questions: [{ ...state[action.title].questions }, action.addCard]
        }
      };
    default:
      return state;
  }
}

export default flashcards;
