import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Header from './components/header/Header';
import HomePage from './pages/homepage/homepage';
import SignIn from './pages/signin/signIn';
import SignUp from './pages/signup/signUp';

const App: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <>
      <Header navbarState={navbarOpen} handleNavbar={handleNavbar} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={SignIn} />
        <Route exact path="/register" component={SignUp} />
      </Switch>
    </>
  );
};

export default App;
