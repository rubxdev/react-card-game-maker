import { combineReducers } from 'redux';
import cardReducer from './card.reducer';

const rootReducer = combineReducers({ cards: cardReducer });

export default rootReducer;
