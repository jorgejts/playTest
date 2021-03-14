import { AnyAction, Dispatch } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import { State } from '../../redux/store/root';

export interface CustomThunkAction extends ThunkAction<Promise<void>, State, unknown, AnyAction> {}

export interface CustomThunkDispatch extends ThunkDispatch<State, unknown, AnyAction> {}

export type DispatchType = Dispatch & CustomThunkDispatch;

export interface GoogleResponse {
  accessToken: string;
  googleId: string;
  profileObj: {
    email: string;
    familyName: string;
    givenName: string;
    googleId: string;
    imageUrl: string;
    name: string;
  };
}

export interface AuthData {
  token: string;
  name: string;
}
