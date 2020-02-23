import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import { setAlert } from '../actions/alertActions';

import {
  USER_LOADED,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  FORGET_PASSWORD,
  AUTH_ERROR,
  CLEAR_PROFILE,
  LOGOUT,
} from './actionTypes';

/**
 * Get Logged-in user detials
 */
export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get('https://udupay.herokuapp.com/api/v1/users/me');

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

/**
 * User Registration
 */
export const registerUser = userDetails => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify(userDetails);

  try {
    const res = await axios.post(
      'https://udupay.herokuapp.com/api/v1/users/signup',
      body,
      config,
    );

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.message;

    if (errors) {
      dispatch(setAlert(errors, 'danger'));
    }
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

/**
 * User Log-in
 */
export const login = (email, password) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post(
      'https://udupay.herokuapp.com/api/v1/users/login',
      body,
      config,
    );

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.message;

    if (errors) {
      dispatch(setAlert(errors, 'danger'));
    }

    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

/**
 * User forget password
 */
export const forgetPassword = email => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ email });

  try {
    const res = await axios.post(
      'https://udupay.herokuapp.com/api/v1/users/forgetPassword',
      body,
      config,
    );

    console.log(res.data);

    dispatch({
      type: FORGET_PASSWORD,
      payload: res.data,
    });

    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.message;

    if (errors) {
      dispatch(setAlert(errors, 'danger'));
    }

    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

/**
 * User Log-out
 */
export const logout = () => dispatch => {
  dispatch({
    type: CLEAR_PROFILE,
  });
  dispatch({
    type: LOGOUT,
  });
};
