import propTypes from 'prop-types';
import React from 'react';
import { GameListItem, GameListWrapper, NewGameButton } from './styles';

const GameListInner = ({ games = [] }) => {
  return (
    <>
      <GameListWrapper>
        {games.map(game => (
          <GameListItem key={game.id}>
            Name: {game.name}, Cards: {game.cards.length}
          </GameListItem>
        ))}

        <NewGameButton>New</NewGameButton>
      </GameListWrapper>
    </>
  );
};

GameListInner.propTypes = {
  games: propTypes.array
};

export default GameListInner;
