import { mount } from 'enzyme';
import React from 'react';
import { Home } from './Home';
import { Title } from './styles';

let wrapper = mount(<Home />);

beforeEach(() => {
  wrapper = mount(<Home />);
});

it('renders without crashing', () => {
  wrapper.render();
});

it('contains a title', () => {
  expect(wrapper.find(Title).length).toEqual(1);
});
