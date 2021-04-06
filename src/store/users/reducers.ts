import {
  GET_USERS_REQ,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE
} from './constants';
import { usersStateType } from '../../shared/types';
import { actionTypes } from './types';

const initialState: usersStateType = { data: [], loading: false, error: false };

const users = (state = initialState, action: actionTypes): usersStateType => {
  switch (action.type) {
  case GET_USERS_REQ:
    return {
      loading: true,
      data: [],
      error: false
    };

  case GET_USERS_SUCCESS:
    return {
      ...state,
      loading: false,
      data: action.payload
    };

  case GET_USERS_FAILURE:
    return {
      data: [],
      loading: false,
      error: action.payload
    };

  default:
    return state;
  }
};

export default users;