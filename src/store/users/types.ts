import {
  GET_USERS_REQ,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE
} from './constants';
import { userType } from '../../shared/types';

type fetchUsersReqActionType = {
  type: typeof GET_USERS_REQ
}

type fetchUsersSuccessActionType = {
  type: typeof GET_USERS_SUCCESS,
  payload: userType[]
}

type fetchUsersFailureActionType = {
  type: typeof GET_USERS_FAILURE,
  payload: boolean
}

export type actionTypes = fetchUsersReqActionType | fetchUsersSuccessActionType | fetchUsersFailureActionType