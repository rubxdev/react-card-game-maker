import * as types from './types';

export const addCard = card => ({
  type: types.ADD_CARD,
  payload: card
});

export const removeCard = id => ({
  type: types.REMOVE_CARD,
  payload: { id }
});

export const updateCard = card => ({
  type: types.UPDATE_CARD,
  payload: card
});
