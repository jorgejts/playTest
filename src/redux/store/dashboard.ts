import { Reducer } from 'redux';
import { Person } from '../../utils/schemas/dashboard';
import { dashboardActions, DashboardActionTypes, SetLoadingAction, SetPeopleAction } from '../actions/dashboard';
import { State } from './root';

export interface DashboardState {
  people: Person | null;
  loading: boolean;
}

const initCommonState: DashboardState = {
  people: null,
  loading: false,
};

export const peopleSelector = (state: State): Person | null => state.dashboardState.people;
export const loadingSelector = (state: State): boolean => state.dashboardState.loading;

export const dashboardReducer: Reducer<DashboardState, DashboardActionTypes> = (
  state: DashboardState = initCommonState,
  action: DashboardActionTypes
): DashboardState => {
  const actions = dashboardActions;

  switch (action.type) {
    case actions.SET_PEOPLE: {
      const { payload } = action as SetPeopleAction;
      return {
        ...state,
        people: payload,
      };
    }
    case actions.REMOVE_PEOPLE: {
      const { payload } = action as SetLoadingAction;

      return {
        ...state,
        loading: payload,
      };
    }
    default:
      return state;
  }
};
