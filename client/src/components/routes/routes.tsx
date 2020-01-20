import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../../pages/homepage/homepage';
import SignIn from '../../pages/signin/signIn';
import SignUp from '../../pages/signup/signUp';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={SignIn} />
      <Route path="/register" component={SignUp} />
    </Switch>
  );
};

export default Routes;
