import {
  GET_REPO_REQ,
  GET_REPO_SUCCESS,
  GET_REPO_FAILURE
} from './constants';
import { reposStateType } from '../../shared/types';
import { actionTypes } from './types';

const initialState: reposStateType = { data: [], loading: false, error: false };

const users = (state = initialState, action: actionTypes): reposStateType => {
  switch (action.type) {
  case GET_REPO_REQ:
    return {
      loading: true,
      data: [],
      error: false
    };

  case GET_REPO_SUCCESS:
    return {
      ...state,
      loading: false,
      data: action.payload
    };

  case GET_REPO_FAILURE:
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