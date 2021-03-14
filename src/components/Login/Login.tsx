import React from 'react';
import cn from 'classnames';
import GoogleLogin from 'react-google-login';
import { Redirect } from 'react-router-dom';

import { LoginProps } from '../../containers/LoginContainer';
import styles from './login.module.scss';
import { GoogleResponse } from 'utils/schemas/common';
import { clientId } from '../../constants/clientId';

const Login: React.FC<LoginProps> = ({ token, loginError, setAuthFunc, setAuthErrorFunc }) => {
  function success(googleResponse: any) {
    // any used to avoid problems from google types out of the test scope
    //
    setAuthErrorFunc(false);
    setAuthFunc(googleResponse as GoogleResponse);
  }

  function error() {
    setAuthErrorFunc(true);
  }

  return !token ? (
    <div className={styles.container}>
      <div className={cn([styles.loginCard], { [styles.error]: loginError })}>
        <GoogleLogin
          clientId={clientId}
          buttonText="Sign in with Google"
          onSuccess={success}
          onFailure={error}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
        />
      </div>
    </div>
  ) : (
    <Redirect to="/dashboard" />
  );
};

export default Login;
