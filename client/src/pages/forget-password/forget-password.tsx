import React, { useState, FormEvent } from 'react';

import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

import { forgetPassword } from '../../actions/authActions';

import { ReactComponent as Logo } from '../../assets/udupay.svg';
import FormInput from '../../components/form-input/form-input';
import CustomButton from '../../components/custom-button/custom-button';

import history from '../../utils/history';

import {
  SigninContainer,
  LogoContainer,
  Title,
  ExistingUser,
  FormContainer,
  ImgDiv,
} from './forget-password.styles';

const btnStyle = {
  margin: '35px 0',
  width: '100%',
};

function ForgetPassword({ forgetPassword, isAuthenticated }) {
  const [formData, setFormData] = useState({
    email: '',
  });

  const { email } = formData;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    forgetPassword(email);
  };

  // redirect user to his dashboard
  if (isAuthenticated) {
    return <Redirect to="/login" />;
  }

  return (
    <SigninContainer>
      {' '}
      <ImgDiv>
        <div className="svg">
          <img
            src="https://res.cloudinary.com/dtziv0hyw/image/upload/v1579874297/register_pceklp.jpg"
            alt="login"
          />
        </div>
      </ImgDiv>
      <FormContainer>
        <div className="sign-in-form">
          <LogoContainer to="/">
            <Logo className="logo" />
          </LogoContainer>
          <Title>REQUEST PASSWORD RESET</Title>{' '}
          <form onSubmit={handleSubmit}>
            {' '}
            <FormInput
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              label="Email"
              autoComplete="off"
              required
            />{' '}
            <CustomButton style={btnStyle} type="submit">
              {' '}
              Request Reset{' '}
            </CustomButton>{' '}
          </form>{' '}
          <ExistingUser onClick={() => history.push('/login')}>
            {' '}
            <p>
              {' '}
              Remember your password? <span>Login</span>
            </p>{' '}
          </ExistingUser>{' '}
        </div>
      </FormContainer>{' '}
    </SigninContainer>
  );
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {
  forgetPassword,
})(ForgetPassword);
