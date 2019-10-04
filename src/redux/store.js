import { compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

const enhancer =
  process.env.NODE_ENV === 'development' ? composeWithDevTools() : compose(); // Only use dev-tools in development

export const createMockStore = initialState =>
  createStore(rootReducer, initialState, enhancer);

const store = createStore(rootReducer, {}, enhancer);

export default store;
