import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { useSpring, config } from 'react-spring';

import { logout } from '../../actions/authActions';

import { ReactComponent as Logo } from '../../assets/udupay.svg';
import BurgerMenu from './burger-menu';
import MobileMenu from './mobile-menu';

import {
  HeaderContainer,
  FlexContainer,
  LogoContainer,
  NavContainer,
  BurgerWrapper,
  NavLink,
  NavLinkSignUp,
} from './header.styles';

function Header({
  navbarState,
  handleNavbar,
  auth: { isAuthenticated },
  logout,
}) {
  const barAnimation = useSpring({
    from: { transform: 'translate3d(0, -10rem, 0)' },
    transform: 'translate3d(0, 0, 0)',
  });

  const linkAnimation = useSpring({
    from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    delay: 800,
    config: config.wobbly,
  });

  const guestLinks = (
    <>
      <NavContainer style={linkAnimation}>
        <NavLink to="/communities">Communities</NavLink>
        <NavLink to="/support">Support</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLinkSignUp to="/register">create account</NavLinkSignUp>
      </NavContainer>
      <BurgerWrapper>
        <BurgerMenu navbarState={navbarState} handleNavbar={handleNavbar} />
      </BurgerWrapper>
    </>
  );

  const authLinks = (
    <>
      <NavContainer style={linkAnimation}>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/communities">Communities</NavLink>
        <NavLink to="/support">Support</NavLink>
        <NavLinkSignUp onClick={logout} to="/">
          Logout
        </NavLinkSignUp>
      </NavContainer>
      <BurgerWrapper>
        <BurgerMenu navbarState={navbarState} handleNavbar={handleNavbar} />
      </BurgerWrapper>
    </>
  );

  return (
    <>
      <HeaderContainer style={barAnimation} id="container">
        <FlexContainer>
          <LogoContainer to="/">
            <Logo className="logo" />
          </LogoContainer>

          {<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>}
        </FlexContainer>
      </HeaderContainer>
      <MobileMenu navbarState={navbarState} handleNavbar={handleNavbar} />
    </>
  );
}

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Header);
