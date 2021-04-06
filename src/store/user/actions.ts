import {
  GET_USER_REQ,
  GET_USER_SUCCESS,
  GET_USER_FAILURE
} from './constants';
import { ThunkResult } from 'shared/types';
import { fetch } from '../';

export const fetchUser = (username: string): ThunkResult<Promise<void>> => {
  return async(dispatch): Promise<void> => {
    try {
      dispatch({ type: GET_USER_REQ });
      const res = await fetch.get(`/users/${username}`);
      dispatch({ type: GET_USER_SUCCESS, payload: res.data });
    } catch (e) {
      dispatch({ type: GET_USER_FAILURE, payload: e.message });
    }
  };
};