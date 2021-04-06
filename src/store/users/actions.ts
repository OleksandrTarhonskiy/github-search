import {
  GET_USERS_REQ,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE
} from './constants';
import { ThunkResult } from '../../shared/types';
import { fetch } from '../index';

export const fetchUsers = (name: string): ThunkResult<Promise<void>> => {
  return async(dispatch): Promise<void> => {
    try {
      dispatch({ type: GET_USERS_REQ });
      const res = await fetch.get(`/search/users?q=${name}&per_page=10`);
      dispatch({ type: GET_USERS_SUCCESS, payload: res.data.items });
    } catch (e) {
      dispatch({ type: GET_USERS_FAILURE, payload: e.message });
    }
  };
};
