import { GET_DECKS, ADD_DECK, ADD_CARD, DEL_DECK, DEL_ALL } from "../actions";

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
      const { deckName } = action;
      // const newState = Object.keys(state).reduce((object, key) => {
      //   if (key !== deckName) {
      //     object[key] = state[key];
      //   }
      //   return object;
      // }, {});

      console.log(`QUERO APAGAR: ${deckName}`);

    default:
      return state;
  }
}

export default flashcards;
