import React, { useEffect, Fragment } from 'react';
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

function PaymentHistory({
  userDetails,
  loadDuesPaid,
  logout,
  payment: { paid, loading },
}) {
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

      <Fragment>
        {loading ? (
          <Spinner />
        ) : (
          <div className="row mt-4">
            <table className="table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Payment Type</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody className="table-body">
                {paid.due.map((due, i) => (
                  <tr key={i} className="table-body">
                    <td>{due.created_at}</td>
                    <td>{due.name}</td>
                    <td>{due.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Fragment>
      <FooterCopyright>
        <p>UduPay. © 2020</p>
      </FooterCopyright>
    </>
  );
}

const mapStateToProps = state => ({
  dashTabElem: state.dashboard.tabs,
  userDetails: state.auth.user,
  payment: state.payment,
});

export default connect(mapStateToProps, { loadDuesPaid, logout })(
  PaymentHistory,
);
