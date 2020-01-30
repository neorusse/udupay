import React from 'react';
import { connect } from 'react-redux';

import { logout } from '../../actions/authActions';

import history from '../../utils/history';
import { ReactComponent as Logo } from '../../assets/udupay.svg';
import Spinner from '../../components/spinner/spinner';

import {
  LogoContainer,
  Support,
  Nav,
  LogoutLink,
  FooterCopyright,
} from './profile.styles';

function Profile({ userDetails, logout }) {
  return userDetails === null ? (
    <Spinner />
  ) : (
    <>
      <div>
        <Support>
          <p onClick={() => history.push('/dashboard')}>Dashboard</p>
          <p>Support/Help</p>
          <LogoutLink onClick={logout} to="/">
            Logout
          </LogoutLink>
        </Support>
        <Nav>
          <LogoContainer to="/">
            <Logo className="logo" />
          </LogoContainer>
          <p>
            Hi {userDetails.user[0].first_name.toUpperCase()}{' '}
            {userDetails.user[0].last_name.toUpperCase()}
          </p>
        </Nav>
      </div>

      <h1>User Profile</h1>
      <FooterCopyright>
        <p>UduPay. © 2020</p>
      </FooterCopyright>
    </>
  );
}

const mapStateToProps = state => ({
  dashTabElem: state.dashboard.tabs,
  userDetails: state.auth.user,
});

export default connect(mapStateToProps, { logout })(Profile);
