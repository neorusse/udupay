import React from 'react';
import { connect } from 'react-redux';

import { logout } from '../../actions/authActions';

import { ReactComponent as Logo } from '../../assets/udupay.svg';
import DashboardItem from '../../components/dashboard-item/dashboard-item';
import Spinner from '../../components/spinner/spinner';

import {
  DashContainer,
  LogoContainer,
  Support,
  Nav,
  LogoutLink,
  FooterCopyright,
} from './dasboard.styles';

function Dashboard({ dashTabElem, userDetails, logout }) {
  return userDetails === null ? (
    <Spinner />
  ) : (
    <>
      <div>
        <Support>
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
            {/* <img src={userDetails.user[0].photo} alt="users" /> */}
            Hi {userDetails.user[0].first_name.toUpperCase()}{' '}
            {userDetails.user[0].last_name.toUpperCase()}
          </p>
        </Nav>
      </div>
      <DashContainer>
        {dashTabElem.map(({ id, ...otherSectionProps }) => (
          <DashboardItem key={id} {...otherSectionProps} />
        ))}
      </DashContainer>
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

export default connect(mapStateToProps, { logout })(Dashboard);
