import {
  GET_REPO_REQ,
  GET_REPO_SUCCESS,
  GET_REPO_FAILURE
} from './constants';
import { ThunkResult } from '../../shared/types';
import { fetch } from '../index';

export const fetchRepos = (username: string): ThunkResult<Promise<void>> => {
  return async(dispatch): Promise<void> => {
    try {
      dispatch({ type: GET_REPO_REQ });
      const res = await fetch.get(`/users/${username}/repos`);
      dispatch({ type: GET_REPO_SUCCESS, payload: res.data });
    } catch (e) {
      dispatch({ type: GET_REPO_FAILURE, payload: e.message });
    }
  };
};
