import { mount } from 'enzyme';
import React from 'react';
import { App } from './App';

let wrapper;

beforeEach(() => {
  wrapper = mount(<App />);
});

it('renders without crashing', () => {
  wrapper.render();
});
