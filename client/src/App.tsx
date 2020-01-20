import React, { useState } from 'react';
import { Router } from 'react-router-dom';

import './App.css';

import history from './utils/history';
import Header from './components/header/header';
import Routes from './components/routes/routes';

const App: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <Router history={history}>
      <>
        <Header navbarState={navbarOpen} handleNavbar={handleNavbar} />
        <Routes />
      </>
    </Router>
  );
};

export default App;
