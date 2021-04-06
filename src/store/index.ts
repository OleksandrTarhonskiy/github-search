import {
  createStore,
  applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

import rootReducer from './rootReducer';
import logger from 'redux-logger';

export const fetch = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'User-Agent': process.env.REACT_APP_GITHUB_USER,
    'Accept': 'application/vnd.github.v3+json'
  },
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
);

export default store;