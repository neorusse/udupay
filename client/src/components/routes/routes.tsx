import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../../pages/home/home';
import SignIn from '../../pages/signin/signIn';
import SignUp from '../../pages/signup/signUp';
import Dashboard from '../../pages/dashboard/dashboard';

import PrivateRoute from './PrivateRoute';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/register" component={SignUp} />
      <Route exact path="/login" component={SignIn} />
      <Route exact path="/" component={HomePage} />
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
    </Switch>
  );
};

export default Routes;
