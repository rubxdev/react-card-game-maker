import { generateMockCard } from '../../../mocks/card';
import { generateMockGame } from '../../../mocks/game';
import * as actions from '../game.actions';
import * as types from '../types/game';

describe('game actions', () => {
  it('should create an action to add a game', () => {
    const mockGame = generateMockGame();
    const expectedAction = {
      type: types.ADD_GAME,
      payload: mockGame
    };

    expect(actions.addGame(mockGame)).toEqual(expectedAction);
  });

  it('should create an action to remove a game', () => {
    const gameId = 0;
    const expectedAction = {
      type: types.REMOVE_GAME,
      payload: { gameId }
    };

    expect(actions.removeGame(gameId)).toEqual(expectedAction);
  });

  it('should create an action to update a game', () => {
    const mockGame = generateMockGame();
    const expectedAction = {
      type: types.UPDATE_GAME,
      payload: mockGame
    };

    expect(actions.updateGame(mockGame)).toEqual(expectedAction);
  });

  it('should create an action to add a card', () => {
    const mockCard = generateMockCard();
    const gameId = 0;

    const expectedAction = {
      type: types.ADD_CARD,
      payload: {
        card: mockCard,
        gameId
      }
    };

    expect(actions.addCard(mockCard, gameId)).toEqual(expectedAction);
  });

  it('should create an action to remove a card', () => {
    const cardId = 0;
    const gameId = 0;
    const expectedAction = {
      type: types.REMOVE_CARD,
      payload: { cardId, gameId }
    };

    expect(actions.removeCard(cardId, gameId)).toEqual(expectedAction);
  });

  it('should create an action to update a card', () => {
    const mockCard = generateMockCard();
    const gameId = 0;
    const expectedAction = {
      type: types.UPDATE_CARD,
      payload: {
        card: mockCard,
        gameId
      }
    };

    expect(actions.updateCard(mockCard, gameId)).toEqual(expectedAction);
  });
});
