import { RECEIVE_RECORDS } from '../actions/RecordsActions';

const _defaultState = {
  locations: []
};

const recordsReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
  case RECEIVE_RECORDS:
    return action.records;
  default:
    return state;
  }
};

export default recordsReducer;