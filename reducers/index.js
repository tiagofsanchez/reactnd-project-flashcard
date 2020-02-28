import { GET_DECKS, ADD_DECK, ADD_CARD, DEL_ALL, DEL_DECK } from "../actions";

const initState = {};

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
    case DEL_ALL:
      return initState;

    case DEL_DECK:
      return Object.keys(state).reduce((newSt, key) => {
        if (key !== action.deckName) {
          return {
            ...newSt,
            [key]: state[key]
          };
        }
        return newSt;
      }, {});

    default:
      return state;
  }
}

export default flashcards;
