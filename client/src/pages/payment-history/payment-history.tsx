import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { logout } from '../../actions/authActions';

import { loadDuesPaid } from '../../actions/paymentActions';
import history from '../../utils/history';
import { ReactComponent as Logo } from '../../assets/udupay.svg';
import Spinner from '../../components/spinner/spinner';

import { Table, Input, Icon } from 'antd';

import {
  LogoContainer,
  Support,
  Nav,
  LogoutLink,
  PaymentList,
  FooterCopyright,
} from './payment-history.styles';

function PaymentHistory({
  userDetails,
  loadDuesPaid,
  logout,
  payment: { paid, loading },
}) {
  const { Search } = Input;

  useEffect(() => {
    loadDuesPaid();
  }, [loadDuesPaid]);

  const columns = [
    {
      title: 'Date',
      dataIndex: 'created_at',
      key: 'id',
    },
    {
      title: 'Payment Type',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Amount (₦)',
      dataIndex: 'amount',
      key: 'amount',
    },
  ];

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

      <PaymentList>
        <Search
          style={{ maxWidth: 300, margin: 'auto' }}
          placeholder="Search"
          onSearch={(value): void => console.log(value)}
          prefix={<Icon type="right" />}
        />
        <p>Transaction List</p>
        <div
          className="ant-divider ant-divider-horizontal"
          role="separator"
        ></div>
        {loading ? (
          <Spinner />
        ) : (
          <Table columns={columns} dataSource={paid.due} />
        )}
      </PaymentList>

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
