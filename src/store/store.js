import { createStore } from 'redux';
import RootReducer from '../reducers/RootReducer';

const configureStore = (preloadedState = {}) => (
  createStore(
    RootReducer,
    preloadedState
  )
);

export default configureStore;
