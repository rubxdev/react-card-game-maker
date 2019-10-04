import { Router } from '@reach/router';
import React from 'react';
import GameList from './GameList';

const App = () => {
  return (
    <>
      <Router>
        <GameList default path={'/games'} />
      </Router>
    </>
  );
};

export default App;
