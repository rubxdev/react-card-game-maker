import React from 'react';
import { connect } from 'react-redux';
import GameListInner from './GameListInner';

const GameList = ({ games }) => {
  return (
    <>
      {React.useMemo(
        () => (
          <GameListInner games={games} />
        ),
        [games]
      )}
    </>
  );
};

const mapStateToProps = state => ({
  games: state.game.items
});

export default connect(mapStateToProps)(GameList);
