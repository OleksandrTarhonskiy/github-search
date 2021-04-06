/* eslint-disable @typescript-eslint/no-explicit-any */
import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';
import { AxiosInstance } from 'axios';
import { ThunkDispatch } from 'redux-thunk';

export type ErrorType = string | boolean

export type userType = {
  [key: string]: any
}

export type repoType = {
  [key: string]: any
}

export type usersStateType = {
  loading: boolean,
  error: ErrorType,
  data: userType[]
}

export type userStateType = {
  loading: boolean,
  error: ErrorType,
  data: userType
}

export type reposStateType = {
  loading: boolean,
  error: ErrorType,
  data: repoType[]
}

export type appStateType = {
  users: usersStateType,
  user: userStateType,
  repos: reposStateType
}

export type AppDispatch = ThunkDispatch<appStateType, any, AnyAction>

export type ThunkResult<R> = ThunkAction<R, appStateType, AxiosInstance, AnyAction>