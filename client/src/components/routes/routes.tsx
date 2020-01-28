import React, { useState } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';

import HomePage from '../../pages/home/home';
import SignIn from '../../pages/signin/signIn';
import SignUp from '../../pages/signup/signUp';
import Dashboard from '../../pages/dashboard/dashboard';
import Header from '../../layout/header/header';
import Footer from '../../layout/footer/footer';
import Alert from '../alert/alert';

import PrivateRoute from './PrivateRoute';

const Routes = withRouter(({ location }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <>
      {['/login', '/signup', '/dashboard', '/forgot-password'].includes(
        location.pathname,
      ) ||
        (['/'].includes(location.pathname) && (
          <Header navbarState={navbarOpen} handleNavbar={handleNavbar} />
        ))}
      <Alert />
      <Switch>
        <Route path="/register" component={SignUp} />
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/" component={HomePage} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
      </Switch>
      {['/login', '/signup', '/dashboard', '/forgot-password'].includes(
        location.pathname,
      ) ||
        (['/'].includes(location.pathname) && <Footer />)}
    </>
  );
});

export default Routes;
