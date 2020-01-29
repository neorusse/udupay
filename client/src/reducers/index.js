import { combineReducers } from 'redux';

// Reducers
import authReducer from './authReducer';
import alertReducer from './alertReducer';
import dashboardReducer from './dashboardReducer';
import duesReducer from './duesReducer';
import paymentReducer from './paymentReducer';

export default combineReducers({
  auth: authReducer,
  alert: alertReducer,
  dashboard: dashboardReducer,
  due: duesReducer,
  payment: paymentReducer,
});
