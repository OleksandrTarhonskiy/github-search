import {
  createStore,
  applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

import rootReducer from './rootReducer';
import logger from 'redux-logger';

export const fetch = axios.create({
  baseURL: 'https://api.github.com/',
  headers: {
    'User-Agent': 'OleksandrTarhonskiy',
    'Accept': 'application/vnd.github.v3+json'
  },
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
);

export default store;