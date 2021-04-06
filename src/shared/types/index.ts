/* eslint-disable @typescript-eslint/no-explicit-any */
import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';
import { AxiosInstance } from 'axios';
import { ThunkDispatch } from 'redux-thunk';

export type userType = {
  id?: number,
  'avatar_url'?: string,
  login?: string,
  [key: string]: any
}

export type usersStateType = {
  loading: boolean,
  error: boolean,
  data: userType[]
}

export type userStateType = {
  loading: boolean,
  error: boolean,
  data: userType
}

export type appStateType = {
  users: usersStateType,
  user: userStateType
}

export type AppDispatch = ThunkDispatch<appStateType, any, AnyAction>

export type ThunkResult<R> = ThunkAction<R, appStateType, AxiosInstance, AnyAction>