import { Router } from '@reach/router';
import React from 'react';
import Home from './Home';

export const App = () => {
  return (
    <>
      <Router>
        <Home default path={'/'} />
      </Router>
    </>
  );
};

export default App;
