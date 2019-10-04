import React from 'react';
import { Provider } from 'react-redux';
import { createMockStore } from '../redux/store';

export const MockProvider = ({children, initialState = {}}) => (
  <Provider store={createMockStore(initialState)}>{children}</Provider>
);
