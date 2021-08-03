import { createStore, combineReducers } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import products from './products.js';

let reducers = combineReducers({ products });

// pass my `reducers` into createStore
export default createStore(reducers, composeWithDevTools());