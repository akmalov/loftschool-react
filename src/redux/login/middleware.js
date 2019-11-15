import serverConfig from '../../common/settings/serverConfig/serverConfig';
import {loginRequest, loginSuccess, loginFailure} from './actions';

export const loginMiddleware = store => next => action => {
  if (action.type === loginRequest.toString()) {
    const {payload} = action;

    serverConfig.post("/auth", payload)
      .then(({data}) => {
        if (!data.success) {
          throw new Error(data.error);
        }

        const {token} = data;

        store.dispatch(loginSuccess(token));
      })
      .catch(({error, message}) => {
        store.dispatch(loginFailure(error || message));
      })
  }

  return next(action);
};
