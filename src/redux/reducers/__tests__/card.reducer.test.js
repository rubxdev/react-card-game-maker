import { generateMockCard, generateUpdatedMockCard } from '../../../mocks/card';
import * as types from '../../actions/types';
import cardReducer from '../card.reducer';

const emptyState = {
  items: []
};

describe('card reducer', () => {
  it('should return the initial state', () => {
    expect(cardReducer(undefined, undefined)).toEqual(emptyState);
  });

  it('should handle ADD_CARD', () => {
    const mockCard = generateMockCard();
    const expectedState = {
      items: [mockCard]
    };

    expect(
      cardReducer(emptyState, { type: types.ADD_CARD, payload: mockCard })
    ).toEqual(expectedState);
  });

  it('should handle REMOVE_CARD', () => {
    const mockCards = [generateMockCard(), generateMockCard(1)];
    const expectedState = {
      items: [mockCards[0]]
    };

    expect(
      cardReducer(
        {
          items: mockCards
        },
        { type: types.REMOVE_CARD, payload: { id: mockCards[1].id } }
      )
    ).toEqual(expectedState);
  });

  it('should handle UPDATE_CARD', () => {
    const mockCards = [generateMockCard(), generateMockCard(1)];
    const updatedMockCard = generateUpdatedMockCard(mockCards[1]);
    const expectedState = {
      items: [mockCards[0], updatedMockCard]
    };

    expect(
      cardReducer(
        {
          items: mockCards
        },
        { type: types.UPDATE_CARD, payload: updatedMockCard }
      )
    ).toEqual(expectedState);
  });
});
