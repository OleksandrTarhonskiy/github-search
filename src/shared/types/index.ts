/* eslint-disable @typescript-eslint/no-explicit-any */
import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';
import { AxiosInstance } from 'axios';
import { ThunkDispatch } from 'redux-thunk';

export interface userType {
  id: number,
  'avatar_url': string,
  login: string,
  [key: string]: any
}

export interface usersState {
  loading: boolean,
  error: boolean,
  data: userType[]
}

export interface appStateType {
  users: usersState
}

export type AppDispatch = ThunkDispatch<appStateType, any, AnyAction>
export type ThunkResult<R> = ThunkAction<R, appStateType, AxiosInstance, AnyAction>