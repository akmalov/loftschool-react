import serverConfig from '../../common/settings/serverConfig/serverConfig';
import {cardPostRequest, cardPostSuccess, cardPostFailure} from './actions';

export const cardPostMiddleware = store => next => action => {
  if (action.type === cardPostRequest.toString()) {
    const {payload} = action;

    serverConfig.post('https://loft-taxi.glitch.me/card', payload)
      .then(({data}) => {
        if (!data.success) {
          throw new Error(data.error);
        }
        store.dispatch(cardPostSuccess(payload));
      })
      .catch(({message, error}) => {
        store.dispatch(cardPostFailure(error || message));
      })
  }

  return next(action);
};
