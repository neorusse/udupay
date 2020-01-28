import { combineReducers } from 'redux';
import authReducer from './authReducer';
import alertReducer from './alertReducer';
import dashboardReducer from './dashboardReducer';

export default combineReducers({
  auth: authReducer,
  alert: alertReducer,
  dashboard: dashboardReducer,
});
