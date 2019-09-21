import { generateMockCard } from '../../../mocks/card';
import * as actions from '../card.actions';
import * as types from '../types/card';

describe('card actions', () => {
  it('should create an action to add a card', () => {
    const mockCard = generateMockCard();
    const expectedAction = {
      type: types.ADD_CARD,
      payload: mockCard
    };

    expect(actions.addCard(mockCard)).toEqual(expectedAction);
  });

  it('should create an action to remove a card', () => {
    const id = 0;
    const expectedAction = {
      type: types.REMOVE_CARD,
      payload: { id: id }
    };

    expect(actions.removeCard(id)).toEqual(expectedAction);
  });

  it('should create an action to update a card', () => {
    const mockCard = generateMockCard();
    const expectedAction = {
      type: types.UPDATE_CARD,
      payload: mockCard
    };

    expect(actions.updateCard(mockCard)).toEqual(expectedAction);
  });
});
