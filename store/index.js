import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import aboutReducer from './reducer';

const store = createStore(aboutReducer, composeWithDevTools());

export default store;
