import { DUE_PAYMENT } from '../actions/actionTypes';

const initialState = {};

const paymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case DUE_PAYMENT:
    default:
      return state;
  }
};

export default paymentReducer;
