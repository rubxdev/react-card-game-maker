import { mount } from 'enzyme';
import React from 'react';
import { generateMockGame } from '../../mocks/game';
import GameListInner from './GameListInner';
import { GameListItem, GameListWrapper, NewGameButton } from './styles';

let wrapper = mount(<GameListInner></GameListInner>);

beforeEach(() => {
  wrapper = mount(<GameListInner></GameListInner>);
});

afterEach(() => {
  wrapper.unmount();
});

describe('game-list component', () => {
  it('should render without crashing', () => {
    wrapper.render();
  });

  it('should contain a game-list wrapper', () => {
    expect(wrapper.find(GameListWrapper).length).toEqual(1);
  });

  it('should contain as many game-list items as passed in props', () => {
    const mockGames = [generateMockGame(), generateMockGame(1)];
    wrapper.setProps({ games: mockGames });

    expect(wrapper.find(GameListItem).length).toEqual(mockGames.length);
  });

  it('should contain a new-game button', () => {
    expect(wrapper.find(NewGameButton).length).toEqual(1);
  });
});
