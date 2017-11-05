import React from 'react';
import ReactDom from 'react-dom';
import Root from './components/core/root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore();

  ReactDom.render(
    <Root store={store} />,
    document.getElementById('root')
  );
});