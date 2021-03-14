import { Reducer } from 'redux';
import { SetAuthAction, SetAuthErrorAction, commonActions, CommonActionTypes } from '../actions/common';
import { State } from './root';

export interface CommonState {
  token: string | null;
  name: string | null;
  authError: boolean;
}

const initCommonState: CommonState = {
  token: null,
  name: null,
  authError: false,
};

export const tokenSelector = (state: State): string | null => state.commonState.token;

export const nameSelector = (state: State): string | null => state.commonState.name;

export const errorSelector = (state: State): boolean => state.commonState.authError;

export const commonReducer: Reducer<CommonState, CommonActionTypes> = (
  state: CommonState = initCommonState,
  action: CommonActionTypes
): CommonState => {
  const actions = commonActions;

  switch (action.type) {
    case actions.SET_AUTHENTICATED: {
      const { payload } = action as SetAuthAction;
      return {
        ...state,
        token: payload.accessToken,
        name: payload.profileObj.name,
      };
    }
    case actions.REMOVE_AUTH_TOKEN: {
      return {
        ...state,
        token: null,
        name: null,
      };
    }
    case actions.SET_AUTH_ERROR: {
      const { payload } = action as SetAuthErrorAction;
      return {
        ...state,
        authError: payload,
      };
    }
    default:
      return state;
  }
};
