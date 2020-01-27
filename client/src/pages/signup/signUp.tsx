import React, { useState, FormEvent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { registerUser } from '../../actions/authActions';
import { setAlert } from '../../actions/alertActions';

import { ReactComponent as Logo } from '../../assets/udupay.svg';
import FormInput from '../../components/form-input/form-input';
import CustomButton from '../../components/custom-button/custom-button';

import history from '../../utils/history';

import {
  RegisterContainer,
  ImgDiv,
  LogoContainer,
  RegisterTitle,
  ExistingUser,
  FormContainer,
} from './signup.styles';

const btnStyle = {
  margin: '35px 0',
  width: '100%',
};

function SignUp({ setAlert, registerUser, isAuthenticated }) {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirmPassword: '',
    street: '',
    city: '',
    phone: '',
  });

  const {
    first_name,
    last_name,
    email,
    password,
    confirmPassword,
    street,
    city,
    phone,
  } = formData;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setAlert('Password do not match', 'danger');
    } else {
      registerUser({
        first_name,
        last_name,
        email,
        password,
        confirmPassword,
        street,
        city,
        phone,
      });
    }
  };

  // redirect user to his dashboard
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <RegisterContainer>
      <ImgDiv>
        <div className="svg">
          <img
            src="https://res.cloudinary.com/dtziv0hyw/image/upload/v1579874297/register_pceklp.jpg"
            alt="signup"
          />
        </div>
      </ImgDiv>
      <FormContainer>
        <div className="sign-up-form">
          <LogoContainer to="/">
            <Logo className="logo" />
          </LogoContainer>
          <RegisterTitle>CREATE ACCOUNT</RegisterTitle>
          <form onSubmit={handleSubmit}>
            <FormInput
              type="text"
              name="first_name"
              value={first_name}
              onChange={handleChange}
              label="First Name"
              required
            />
            <FormInput
              type="text"
              name="last_name"
              value={last_name}
              onChange={handleChange}
              label="Last Name"
              required
            />
            <FormInput
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              label="Email"
              autoComplete="off"
              required
            />
            <FormInput
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              label="Password"
              required
            />
            <FormInput
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleChange}
              label="Confirm Password"
              required
            />
            <FormInput
              type="text"
              name="street"
              value={street}
              onChange={handleChange}
              label="Street"
              required
            />
            <FormInput
              type="text"
              name="city"
              value={city}
              onChange={handleChange}
              label="City"
              required
            />
            <FormInput
              type="text"
              name="phone"
              value={phone}
              onChange={handleChange}
              label="Phone"
              required
            />
            <CustomButton style={btnStyle} type="submit">
              SIGN UP
            </CustomButton>
          </form>

          <ExistingUser onClick={() => history.push('/login')}>
            <p>
              Have an account? <span>Sign in</span>
            </p>
          </ExistingUser>
        </div>
      </FormContainer>
    </RegisterContainer>
  );
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, registerUser })(SignUp);
