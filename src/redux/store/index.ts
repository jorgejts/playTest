import { Action, applyMiddleware, createStore, Store } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer, { State } from './root';

export type AppStore = Store<State, Action>;

const buildStore = (): Store => {
  const middlewares = [thunk];
  const store = createStore<State, Action, unknown, unknown>(
    rootReducer(),
    composeWithDevTools(applyMiddleware(...middlewares))
  );

  return store;
};

export default buildStore;
