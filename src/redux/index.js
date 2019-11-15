import {combineReducers} from 'redux';

import login from './login';
import register from './register';
import bankCard from './bankCard';

export default combineReducers({
  login,
  register,
  bankCard
});
