import { compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

const enhancer =
  process.env.NODE_ENV === 'development' ? composeWithDevTools() : compose(); // Only use dev-tools in development

const store = createStore(rootReducer, {}, enhancer);

export default store;
