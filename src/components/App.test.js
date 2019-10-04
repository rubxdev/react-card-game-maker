import { Router } from '@reach/router';
import { mount } from 'enzyme';
import React from 'react';
import App from './App';
import { MockProvider } from '../mocks/provider';
import GameList from './GameList/GameList';

let wrapper = mount(
  <MockProvider>
    <App />
  </MockProvider>
);

beforeEach(() => {
  wrapper = mount(
    <MockProvider>
      <App />
    </MockProvider>
  );
});

afterEach(() => {
  wrapper.unmount();
});

describe('app component', () => {
  it('should render without crashing', () => {
    wrapper.render();
  });

  describe('router', () => {
    it('should contain a Router and one Route', () => {
      const routerWrapper = wrapper // To get the router-wrapper, find any component that is a route
        .find(Router)
        .find(GameList)
        .parents()
        .at(0);

      expect(wrapper.find(Router).length).toEqual(1);
      expect(routerWrapper.children().length).toEqual(1);
    });

    it('should only contain one default Route', () => {
      const routerWrapper = wrapper
        .find(Router)
        .find(GameList)
        .parents()
        .at(0);
      const defaultRoutes = routerWrapper
        .children()
        .filterWhere(component => component.prop('default'));

      expect(defaultRoutes.length).toEqual(1);
    });
  });
});
