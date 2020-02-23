import React, { useState } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';

// componenets
import HomePage from '../../pages/home/home';
import SignIn from '../../pages/signin/signIn';
import SignUp from '../../pages/signup/signUp';
import ForgetPassword from '../../pages/forget-password/forget-password';
import Dashboard from '../../pages/dashboard/dashboard';
import Header from '../../layout/header/header';
import Footer from '../../layout/footer/footer';
import Alert from '../alert/alert';
import Payment from '../../pages/payment/payment';
import PaymentHistory from '../../pages/payment-history/payment-history';
import Help from '../../pages/help/help';
import Profile from '../../pages/profile/profile';

import PrivateRoute from './PrivateRoute';

const Routes = withRouter(({ location }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <>
      {['/login', '/signup', '/dashboard', '/forgotPassword'].includes(
        location.pathname,
      ) ||
        (['/'].includes(location.pathname) && (
          <Header navbarState={navbarOpen} handleNavbar={handleNavbar} />
        ))}
      <Alert />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/register" component={SignUp} />
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/forgotPassword" component={ForgetPassword} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/dashboard/payment" component={Payment} />
        <PrivateRoute exact path="/dashboard/support" component={Help} />
        <PrivateRoute exact path="/dashboard/profile" component={Profile} />
        <PrivateRoute
          exact
          path="/dashboard/paymenthistory"
          component={PaymentHistory}
        />
      </Switch>
      {['/login', '/signup', '/dashboard', '/forgotPassword'].includes(
        location.pathname,
      ) ||
        (['/'].includes(location.pathname) && <Footer />)}
    </>
  );
});

export default Routes;
