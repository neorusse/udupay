import React, { useState, useEffect, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { loadDues } from '../../actions/duesActions';
import { insertPayment } from '../../actions/paymentActions';

import Spinner from '../../components/spinner/spinner';
import CustomButton from '../../components/custom-button/custom-button';

import history from '../../utils/history';
import { logout } from '../../actions/authActions';

import { ReactComponent as Logo } from '../../assets/udupay.svg';

import {
  PayContainer,
  LogoContainer,
  Support,
  Nav,
  LogoutLink,
  FooterCopyright,
} from './payment.styles';

// form select field
const SelectBox = ({ children, onChange, value }) => (
  <select className="form-select" onChange={onChange} value={value}>
    {children}
  </select>
);

// form select option
const Option = ({ value, description }) => (
  <option value={value}>{description}</option>
);

// outputs selected payment type amount
const DueAmount = ({ name, amount }) => (
  <div className="form-select">{`${name.toUpperCase()} ₦${amount}`}</div>
);

function Payment({
  insertPayment,
  loadDues,
  userDetails,
  logout,
  due: { due, loading },
}) {
  const [name, setName] = useState('');
  const [dueId, setDueId] = useState('');
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    loadDues();
  }, [loadDues]);

  // Config for Flutterwave RavePay Module
  const handlePay = () => {
    window.getpaidSetup({
      amount: amount,
      currency: 'NGN',
      txref: 'rave-checkout-1508751596',
      PBFPubKey: 'FLWPUBK_TEST-11ce59fc3d6cd329eb6330de4a4fd0d9-X',
      custom_title: 'UduPay',
      payment_method: 'both',
      customer_firstname: userDetails.user[0].first_name,
      customer_lastname: userDetails.user[0].last_name,
      customer_email: userDetails.user[0].email,
      customer_phone: userDetails.user[0].phone,
      redirect_url: '/dashboard',
      onclose: function() {},
      callback: function(response) {
        if (
          response.tx.chargeResponseCode === '00' ||
          response.tx.chargeResponseCode === '0'
        ) {
          redirectUri();
        }

        window.close();

        return;
      },
    });
  };

  const handleChange = e => {
    let dueDetail = JSON.parse(e.target.value);
    setAmount(dueDetail.value);
    setDueId(dueDetail.dueId);
    setName(dueDetail.name);
  };

  const extractDate = () => {
    let currentDate = new Date();

    let date = currentDate.getDate();
    let month = currentDate.getMonth();
    let year = currentDate.getFullYear();

    let dateString = year + '-' + (month + 1) + '-' + date;

    return dateString;
  };

  // Called when payment is successfull
  const redirectUri = () => {
    let paymentDate = extractDate();
    console.log(paymentDate);
    insertPayment(userDetails.user[0].id, dueId);
    return <Redirect to="/dashboard" />;
  };

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
          <PayContainer>
            <SelectBox onChange={handleChange} value={amount}>
              <Option description="Select Payment Type" />

              {due.allDues.map((due, i) => (
                <Option
                  key={i}
                  value={JSON.stringify({
                    dueId: due.id,
                    name: due.name,
                    value: due.amount,
                  })}
                  description={due.name}
                />
              ))}
            </SelectBox>
            {amount === 0 ? null : <DueAmount name={name} amount={amount} />}
            <CustomButton onClick={handlePay} type="submit">
              PAY
            </CustomButton>
          </PayContainer>
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
  due: state.due,
});

export default connect(mapStateToProps, { insertPayment, loadDues, logout })(
  Payment,
);
