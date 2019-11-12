import serverConfig from '../../common/settings/serverConfig/serverConfig';
import {registerRequest, registerSuccess, registerFailure} from './actions';

export const registerMiddleware = store => next => action => {
  if (action.type === registerRequest.toString()) {
    const {payload} = action;

    serverConfig.post("/register", payload)
      .then(({data}) => {
        if (!data.success) {
          throw new Error(data.error);
        }
        store.dispatch(registerSuccess(data.token));
      })
      .catch(({error, message}) => {
        store.dispatch(registerFailure(error || message));
      })
  }

  return next(action);
};