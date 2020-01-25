import React, { useState, FormEvent } from 'react';

import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

import { login } from '../../actions/authActions';

import FormInput from '../../components/form-input/form-input';
import CustomButton from '../../components/custom-button/custom-button';

import history from '../../utils/history';

import {
  SigninContainer,
  Title,
  ExistingUser,
  FormContainer,
} from './signin.styles';

const btnStyle = {
  margin: '35px 0',
  width: '100%',
};

function SignUp({ login, isAuthenticated }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    login(email, password);
  };

  // redirect user to his dashboard
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <SigninContainer>
      {' '}
      <div className="svg">
        {' '}
        <img
          src="https://res.cloudinary.com/dtziv0hyw/image/upload/v1579874297/register_pceklp.jpg"
          alt="login"
        />{' '}
      </div>{' '}
      <FormContainer>
        {' '}
        <Title>LOGIN</Title>{' '}
        <form className="sign-in-form" onSubmit={handleSubmit}>
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
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            label="Password"
            required
          />{' '}
          <CustomButton style={btnStyle} type="submit">
            {' '}
            SIGN IN{' '}
          </CustomButton>{' '}
        </form>{' '}
        <ExistingUser onClick={() => history.push('/register')}>
          {' '}
          <p>
            {' '}
            Don't have an account? <span>Register Here</span>
          </p>{' '}
        </ExistingUser>{' '}
        <ExistingUser onClick={() => history.push('/forgetPassword')}>
          {' '}
          <span>Forget your password?</span>{' '}
        </ExistingUser>{' '}
      </FormContainer>{' '}
    </SigninContainer>
  );
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {
  login,
})(SignUp);
