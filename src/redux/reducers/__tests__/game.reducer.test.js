import { generateMockCard, generateUpdatedMockCard } from '../../../mocks/card';
import { generateMockGame, generateUpdatedMockGame } from '../../../mocks/game';
import * as types from '../../actions/types/game';
import gameReducer from '../game.reducer';

const emptyState = {
  items: []
};

describe('game reducer', () => {
  it('should return the initial state', () => {
    expect(gameReducer(undefined, undefined)).toEqual(emptyState);
  });

  it('should handle ADD_GAME', () => {
    const mockGame = generateMockGame();
    const expectedState = {
      items: [mockGame]
    };

    expect(
      gameReducer(emptyState, { type: types.ADD_GAME, payload: mockGame })
    ).toEqual(expectedState);
  });

  it('should handle REMOVE_GAME', () => {
    const mockGames = [generateMockGame(), generateMockGame(1)];
    const expectedState = {
      items: [mockGames[0]]
    };

    expect(
      gameReducer(
        {
          items: mockGames
        },
        { type: types.REMOVE_GAME, payload: { gameId: mockGames[1].id } }
      )
    ).toEqual(expectedState);
  });

  it('should handle UPDATE_GAME', () => {
    const mockGames = [generateMockGame(), generateMockGame(1)];
    const updatedMockGame = generateUpdatedMockGame(mockGames[1]);
    const expectedState = {
      items: [mockGames[0], updatedMockGame]
    };

    expect(
      gameReducer(
        {
          items: mockGames
        },
        { type: types.UPDATE_GAME, payload: updatedMockGame }
      )
    ).toEqual(expectedState);
  });

  it('should handle ADD_CARD', () => {
    const mockGame = generateMockGame();
    const mockCard = generateMockCard(2);
    const expectedState = {
      items: [{ ...mockGame, cards: [...mockGame.cards, mockCard] }]
    };

    expect(
      gameReducer(
        {
          items: [mockGame]
        },
        {
          type: types.ADD_CARD,
          payload: { card: mockCard, gameId: mockGame.id }
        }
      )
    ).toEqual(expectedState);
  });

  it('should handle REMOVE_CARD', () => {
    const mockGame = generateMockGame();
    const expectedState = {
      items: [{ ...mockGame, cards: [mockGame.cards[0]] }]
    };

    expect(
      gameReducer(
        {
          items: [mockGame]
        },
        {
          type: types.REMOVE_CARD,
          payload: { cardId: mockGame.cards[1].id, gameId: mockGame.id }
        }
      )
    ).toEqual(expectedState);
  });

  it('should handle UPDATE_CARD', () => {
    const mockGame = generateMockGame();
    const updatedMockCard = generateUpdatedMockCard(mockGame.cards[1]);
    const expectedState = {
      items: [{ ...mockGame, cards: [mockGame.cards[0], updatedMockCard] }]
    };

    expect(
      gameReducer(
        {
          items: [mockGame]
        },
        {
          type: types.UPDATE_CARD,
          payload: { card: updatedMockCard, gameId: mockGame.id }
        }
      )
    ).toEqual(expectedState);
  });
});
