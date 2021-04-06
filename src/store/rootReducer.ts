import { combineReducers } from 'redux';

import users from './users/reducers';
import user from './user/reducers';
import repos from './repos/reducers';

export default combineReducers({
  users,
  user,
  repos
});