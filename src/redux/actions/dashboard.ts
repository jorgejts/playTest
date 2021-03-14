import { Action } from 'redux';
import { Person } from '../../utils/schemas/dashboard';
import { CustomThunkAction, CustomThunkDispatch } from '../../utils/schemas/common';
import { State } from '../../redux/store/root';
import { removeAuthToken } from './common';

export const dashboardActions = {
  SET_PEOPLE: 'SET_PEOPLE',
  REMOVE_PEOPLE: 'REMOVE_PEOPLE',
  SET_LOADING: 'SET_LOADING',
};

export interface SetPeopleAction extends Action {
  type: typeof dashboardActions.SET_PEOPLE;
  payload: Person;
}

export interface RemovePeopleAction extends Action {
  type: typeof dashboardActions.REMOVE_PEOPLE;
}

export interface SetLoadingAction extends Action {
  type: typeof dashboardActions.SET_LOADING;
  payload: boolean;
}

export type DashboardActionTypes = SetPeopleAction | RemovePeopleAction;

export const setPeople = (person: Person): SetPeopleAction => ({
  type: dashboardActions.SET_PEOPLE,
  payload: person,
});

export const removePeople = (): RemovePeopleAction => ({
  type: dashboardActions.REMOVE_PEOPLE,
});

export const setLoading = (loading: boolean): SetLoadingAction => ({
  type: dashboardActions.SET_LOADING,
  payload: loading,
});

export const fetchPeople = (): CustomThunkAction => async (dispatch: CustomThunkDispatch, getState: () => State) => {
  const {
    commonState: { token },
  } = getState();

  if (!token) {
    dispatch(removeAuthToken());
  } else {
    dispatch(setLoading(true));
    /*
    in case the request need the token, it woud be like:
  
    const options = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    
    
    */

    const response = await fetch('https://swapi.dev/api/people/1/');
    const people = await response.json();

    dispatch(setPeople(people));
    dispatch(setLoading(false));
  }
};
