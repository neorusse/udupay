import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { logout } from '../../actions/authActions';

import { useSpring, animated } from 'react-spring';

const MobileMenu = ({
  handleNavbar,
  navbarState,
  auth: { isAuthenticated },
  logout,
}) => {
  const { open } = useSpring({ open: navbarState ? 0 : 1 });

  if (navbarState === true) {
    const guestLinks = (
      <NavLinks>
        <Link onClick={handleNavbar} to="/communities">
          Communities
        </Link>
        <Link onClick={handleNavbar} to="/support">
          Support
        </Link>
        <Link onClick={handleNavbar} to="/login">
          Login
        </Link>
        <Link onClick={handleNavbar} to="/register">
          Create Account
        </Link>
      </NavLinks>
    );

    const authLinks = (
      <NavLinks>
        <Link onClick={handleNavbar} to="/dashboard">
          Dashboard
        </Link>
        <Link onClick={handleNavbar} to="/communities">
          Communities
        </Link>
        <Link onClick={handleNavbar} to="/support">
          Support
        </Link>
        <Link onClick={logout} to="/logout">
          Logout
        </Link>
      </NavLinks>
    );

    return (
      <MobileMenuContainer
        style={{
          transform: open
            .interpolate({
              range: [0, 0.2, 0.3, 1],
              output: [0, -20, 0, -200],
            })
            .interpolate(openValue => `translate3d(0, ${openValue}px, 0`),
        }}
        id="container"
      >
        {<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>}
      </MobileMenuContainer>
    );
  }
  return null;
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(MobileMenu);

// Styles
const MobileMenuContainer = styled(animated.div)`
  position: fixed;
  top: 8rem;
  left: 0;
  right: 0;
`;

const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & a {
    font-size: 1.7rem;
    font-weight: 600;
    line-height: 2;
    color: #333;
    cursor: pointer;

    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }
  }
`;
