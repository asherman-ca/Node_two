import { combineReducers } from 'redux';
import RecordsReducer from './RecordsReducer';

const rootReducer = combineReducers({
  records: RecordsReducer
});

export default rootReducer;
