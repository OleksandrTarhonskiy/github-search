import { combineReducers } from 'redux';

import users from './users/reducers';
import user from './user/reducers';

export default combineReducers({
  users,
  user
});