import {combineReducers} from 'redux';

import auth from '../../App/containers/withAuthLayout/store';

const rootReducer = combineReducers({
  auth,
});

export default rootReducer;