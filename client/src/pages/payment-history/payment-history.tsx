import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { logout } from '../../actions/authActions';

import { loadDuesPaid } from '../../actions/paymentActions';
import history from '../../utils/history';
import { ReactComponent as Logo } from '../../assets/udupay.svg';
import Spinner from '../../components/spinner/spinner';

import {
  LogoContainer,
  Support,
  Nav,
  LogoutLink,
  FooterCopyright,
} from './payment-history.styles';

function PaymentHistory({ userDetails, loadDuesPaid, logout }) {
  useEffect(() => {
    loadDuesPaid();
  }, [loadDuesPaid]);

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
            {/* <img src={userDetails.user[0].photo} alt="users" /> */}
            Hi {userDetails.user[0].first_name.toUpperCase()}{' '}
            {userDetails.user[0].last_name.toUpperCase()}
          </p>
        </Nav>
      </div>

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

export default connect(mapStateToProps, { loadDuesPaid, logout })(
  PaymentHistory,
);
