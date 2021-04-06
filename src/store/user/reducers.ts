/* eslint-disable @typescript-eslint/ban-types */
import {
  GET_USER_REQ,
  GET_USER_SUCCESS,
  GET_USER_FAILURE
} from './constants';
import { ErrorType } from 'shared/types';
import { actionTypes } from './types';

type initialStateType = {
  data: {},
  loading: boolean,
  error: ErrorType
}

const initialState: initialStateType = { data: {}, loading: false, error: false };

const users = (state = initialState, action: actionTypes): initialStateType => {
  switch (action.type) {
  case GET_USER_REQ:
    return {
      loading: true,
      data: {},
      error: false
    };

  case GET_USER_SUCCESS:
    return {
      ...state,
      loading: false,
      data: action.payload
    };

  case GET_USER_FAILURE:
    return {
      data: {},
      loading: false,
      error: action.payload
    };

  default:
    return state;
  }
};

export default users;