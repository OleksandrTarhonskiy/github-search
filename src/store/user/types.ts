import {
  GET_USER_REQ,
  GET_USER_SUCCESS,
  GET_USER_FAILURE
} from './constants';
import { userType } from '../../shared/types';

type fetchUserReqActionType = {
  type: typeof GET_USER_REQ
}

type fetchUserSuccessActionType = {
  type: typeof GET_USER_SUCCESS,
  payload: userType
}

type fetchUserFailureActionType = {
  type: typeof GET_USER_FAILURE,
  payload: boolean
}

export type actionTypes = fetchUserReqActionType | fetchUserSuccessActionType | fetchUserFailureActionType