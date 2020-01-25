import React, { useState, useEffect } from 'react';
import { Router } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import store from './store';

import './App.css';

import history from './utils/history';
import Header from './layout/header/header';
import Routes from './components/routes/routes';
import Footer from './layout/footer/footer';

import { loadUser } from './actions/authActions.js';
import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  const handleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <Provider store={store}>
      <Router history={history}>
        <>
          <Header navbarState={navbarOpen} handleNavbar={handleNavbar} />
          <Routes />
          <Footer />
        </>
      </Router>
    </Provider>
  );
};

export default App;
