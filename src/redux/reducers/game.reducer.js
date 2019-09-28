import * as types from '../actions/types/game';

const initialState = {
  items: []
};

const gameReducer = (
  state = initialState,
  { type, payload } = { type: '', payload: null }
) => {
  switch (type) {
    case types.ADD_GAME: {
      const { items } = state;

      items.push(payload);

      return { ...state, items };
    }

    case types.REMOVE_GAME: {
      const { items } = state;
      const index = items.findIndex(game => game.id === payload.gameId);

      items.splice(index, 1);

      return { ...state, items };
    }

    case types.UPDATE_GAME: {
      const { items } = state;
      const index = items.findIndex(game => game.id === payload.id);

      items[index] = payload;

      return { ...state, items };
    }

    case types.ADD_CARD: {
      const { items } = state;
      const gameIndex = items.findIndex(game => game.id === payload.gameId);

      items[gameIndex].cards.push(payload.card);

      return { ...state, items };
    }

    case types.REMOVE_CARD: {
      const { items } = state;
      const gameIndex = items.findIndex(game => game.id === payload.gameId);
      const { cards } = items[gameIndex];
      const cardIndex = cards.findIndex(card => card.id === payload.cardId);

      cards.splice(cardIndex, 1);
      items[gameIndex].cards = cards;

      return { ...state, items };
    }

    case types.UPDATE_CARD: {
      const { items } = state;
      const gameIndex = items.findIndex(game => game.id === payload.gameId);
      const { cards } = items[gameIndex];
      const cardIndex = cards.findIndex(card => card.id === payload.card.id);

      cards[cardIndex] = payload.card;
      items[gameIndex].cards = cards;

      return { ...state, items };
    }

    default:
      return state;
  }
};

export default gameReducer;
