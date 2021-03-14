import { Action } from 'redux';
import { AuthData, CustomThunkAction, CustomThunkDispatch, GoogleResponse } from '../../utils/schemas/common';

export const commonActions = {
  SET_AUTHENTICATED: 'SET_AUTHENTICATED',
  SET_NAME: 'SET_NAME',
  SET_AUTH_ERROR: 'SET_AUTH_ERROR',
  REMOVE_AUTH_TOKEN: 'REMOVE_AUTH_TOKEN',
};

export interface SetAuthAction extends Action {
  type: typeof commonActions.SET_AUTHENTICATED;
  payload: GoogleResponse;
}

export interface SetAuthErrorAction extends Action {
  type: typeof commonActions.SET_AUTH_ERROR;
  payload: boolean;
}
export interface RemoveAuthTokenAction extends Action {
  type: typeof commonActions.REMOVE_AUTH_TOKEN;
}

export type CommonActionTypes = SetAuthAction | SetAuthErrorAction | RemoveAuthTokenAction;

export const setAuth = (data: GoogleResponse): SetAuthAction => ({
  type: commonActions.SET_AUTHENTICATED,
  payload: data,
});

export const setAuthError = (isError: boolean): SetAuthErrorAction => ({
  type: commonActions.SET_AUTH_ERROR,
  payload: isError,
});

export const removeAuthToken = (): RemoveAuthTokenAction => ({
  type: commonActions.REMOVE_AUTH_TOKEN,
});
