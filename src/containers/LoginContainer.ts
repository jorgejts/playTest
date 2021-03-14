import { connect, MapStateToProps, MapDispatchToPropsFunction } from 'react-redux';
// import { reposSelector } from '../redux/store/';

import Login from '../components/Login/Login';

import { State } from '../redux/store/root';
import { DispatchType } from '../utils/schemas/common';
import { setAuth, setAuthError } from '../redux/actions/common';
import { errorSelector, tokenSelector } from '../redux/store/common';

interface LoginStateProps {
  token: string | null;
  loginError: boolean;
}

interface LoginDispatchProps {
  setAuthFunc: (googleResponse: any) => void;
  setAuthErrorFunc: (isError: boolean) => void;
}

export interface LoginProps extends LoginStateProps, LoginDispatchProps {}

const mapStateToProps: MapStateToProps<LoginStateProps, LoginProps, State> = (state) => {
  return {
    token: tokenSelector(state),
    loginError: errorSelector(state),
  };
};

const mapDispatchToProps: MapDispatchToPropsFunction<LoginDispatchProps, unknown> = (dispatch: DispatchType) => {
  return {
    setAuthFunc: (googleResponse: any) => dispatch(setAuth(googleResponse)),
    setAuthErrorFunc: (isError: boolean) => dispatch(setAuthError(isError)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
