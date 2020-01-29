import { LOAD_DUES } from '../actions/actionTypes';

const INITIAL_STATE = {
  loading: true,
  due: null,
};

const duesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_DUES:
      return {
        ...state,
        loading: false,
        due: action.payload,
      };
    default:
      return state;
  }
};

export default duesReducer;
