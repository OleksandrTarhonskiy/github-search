import {
  GET_REPO_REQ,
  GET_REPO_SUCCESS,
  GET_REPO_FAILURE
} from './constants';
import { repoType } from 'shared/types';

type fetchReposReqActionType = {
  type: typeof GET_REPO_REQ
}

type fetchReposSuccessActionType = {
  type: typeof GET_REPO_SUCCESS,
  payload: repoType[]
}

type fetchReposFailureActionType = {
  type: typeof GET_REPO_FAILURE,
  payload: boolean
}

export type actionTypes = fetchReposReqActionType | fetchReposSuccessActionType | fetchReposFailureActionType
                          