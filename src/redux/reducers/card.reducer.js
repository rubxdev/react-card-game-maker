import * as types from '../actions/types/card';

const initialState = {
  items: []
};

const cardReducer = (
  state = initialState,
  { type, payload } = { type: '', payload: null }
) => {
  switch (type) {
    case types.ADD_CARD: {
      const { items } = state;
      items.push(payload);

      return { ...state, items };
    }

    case types.REMOVE_CARD: {
      const { items } = state;
      const index = items.findIndex(card => card.id === payload.id);
      items.splice(index, 1);

      return { ...state, items };
    }

    case types.UPDATE_CARD: {
      const { items } = state;
      const index = items.findIndex(card => card.id === payload.id);
      items[index] = payload;

      return { ...state, items };
    }

    default:
      return state;
  }
};

export default cardReducer;
