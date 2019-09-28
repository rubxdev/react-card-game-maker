import * as types from './types/game';

export const addGame = game => ({
  type: types.ADD_GAME,
  payload: game
});

export const removeGame = gameId => ({
  type: types.REMOVE_GAME,
  payload: { gameId }
});

export const updateGame = game => ({
  type: types.UPDATE_GAME,
  payload: game
});

export const addCard = (card, gameId) => ({
  type: types.ADD_CARD,
  payload: { card, gameId }
});

export const removeCard = (cardId, gameId) => ({
  type: types.REMOVE_CARD,
  payload: { cardId, gameId }
});

export const updateCard = (card, gameId) => ({
  type: types.UPDATE_CARD,
  payload: { card, gameId }
});
