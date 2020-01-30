import axios from 'axios';

import { DUE_PAYMENT, LOAD_DUE_PAYMENT, REGISTER_FAIL } from './actionTypes';

/**
 * Write Due Payment to Database
 */
export const insertPayment = (user_id, dues_id) => async dispatch => {
  console.log('REDUCER', user_id, dues_id);
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ user_id, dues_id });

  try {
    const res = await axios.post(
      'https://udupay.herokuapp.com/api/v1/payment',
      body,
      config,
    );

    dispatch({
      type: DUE_PAYMENT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

/**
 * Read dues paid by a specific user
 */
export const loadDuesPaid = () => async dispatch => {
  try {
    const res = await axios.get('https://udupay.herokuapp.com/api/v1/payment');

    dispatch({
      type: LOAD_DUE_PAYMENT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};
