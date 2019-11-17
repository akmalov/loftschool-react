import {combineReducers} from 'redux';

import auth from './auth';
import profile from './profile';
import map from './map';

const rootReducer = combineReducers({
  auth,
  profile,
  map
});

export default rootReducer;