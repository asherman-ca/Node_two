import React from 'react';
import ReactDom from 'react-dom';
import Root from './components/core/root';
import configureStore from './store/store';
import injectTapEventPlugin from 'react-tap-event-plugin';

document.addEventListener('DOMContentLoaded', () => {
  injectTapEventPlugin();
  let store = configureStore();
  window.store = store;

  ReactDom.render(
    <Root store={store} />,
    document.getElementById('root')
  );
});