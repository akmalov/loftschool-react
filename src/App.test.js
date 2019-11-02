import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('App', () => {
  it('should render without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(React.createElement(App), div);
    ReactDOM.unmountComponentAtNode(div);
  });
});