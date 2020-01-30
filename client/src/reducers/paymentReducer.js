import { DUE_PAYMENT, LOAD_DUE_PAYMENT } from '../actions/actionTypes';

const initialState = {
  loading: true,
  paid: null,
};

const paymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case DUE_PAYMENT:
    case LOAD_DUE_PAYMENT:
      return {
        ...state,
        loading: false,
        paid: action.payload,
      };
    default:
      return state;
  }
};

export default paymentReducer;
