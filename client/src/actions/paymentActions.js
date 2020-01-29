import axios from 'axios';

import { DUE_PAYMENT, REGISTER_FAIL } from './actionTypes';

/**
 * User Registration
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
