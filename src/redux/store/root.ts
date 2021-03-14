import { Action, combineReducers, Reducer } from 'redux';
import { DashboardState, dashboardReducer } from './dashboard';
import { CommonState, commonReducer } from './common';

export interface State {
  dashboardState: DashboardState;
  commonState: CommonState;
}

const rootReducer = (): Reducer<State, Action> =>
  combineReducers({
    dashboardState: dashboardReducer,
    commonState: commonReducer,
  });

export default rootReducer;
