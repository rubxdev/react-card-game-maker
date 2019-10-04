import { Router } from '@reach/router';
import React from 'react';
import GameList from './GameList';
import { Normalize } from 'styled-normalize';

const App = () => {
  return (
    <>
      <Normalize />
      <Router>
        <GameList default path={'/games'} />
      </Router>
    </>
  );
};

export default App;
