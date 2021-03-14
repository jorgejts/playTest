import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import buildStore from './redux/store';
import LoginContainer from './containers/LoginContainer';
import ReposContainer from './containers/DashboardContainer';
import styles from './root.module.scss';

interface RootProps {}

const Root: React.FC<RootProps> = () => {
  return (
    <Provider store={buildStore()}>
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <BrowserRouter>
        <div className={styles.container}>
          <Switch>
            <Route exact path="/" component={LoginContainer} />
            <Route path={'/dashboard'} component={ReposContainer} />
          </Switch>
        </div>
      </BrowserRouter>
      {/* </Suspense> */}
    </Provider>
  );
};

export default Root;
