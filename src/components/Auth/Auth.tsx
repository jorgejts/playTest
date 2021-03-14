import React from 'react';
import { Redirect } from 'react-router-dom';

interface AuthProps {
  token: string | null;
}

const Auth: React.FC<AuthProps> = ({ token, children }) => (token ? <>{children}</> : <Redirect to="/" />);

export default Auth;
