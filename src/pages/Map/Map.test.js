import React from 'react';
import {render} from '@testing-library/react';
import {createStore} from "redux";
import rootReducer from "../../redux/reducer";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

import Map from './Map';

describe('Map', () => {
  it('should render without errors', () => {
    let store = createStore(rootReducer);

    const {queryByTestId} = render(
      <Provider store={store}>
        <BrowserRouter>
          <Map/>
        </BrowserRouter>
      </Provider>);

    expect(queryByTestId('map')).toBeTruthy();
  });
});